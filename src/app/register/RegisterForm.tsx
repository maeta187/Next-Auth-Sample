'use client'

import { signIn } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  let [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLoading(false)
      if (!res.ok) {
        alert((await res.json()).message)
        return
      }

      signIn(undefined, { callbackUrl: '/' })
    } catch (error: any) {
      setLoading(false)
      console.error(error)
      alert(error.message)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col w-6/12 mx-auto gap-y-2.5'
    >
      <label htmlFor='name'>Name</label>
      <input
        required
        type='text'
        name='name'
        className='text-gray-900'
        value={formValues.name}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <label htmlFor='email'>Email</label>
      <input
        required
        type='email'
        name='email'
        className='text-gray-900'
        value={formValues.email}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <label htmlFor='password'>Password</label>
      <input
        required
        type='password'
        name='password'
        className='text-gray-900'
        value={formValues.password}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <button
        type='submit'
        className={` bg-opacity-75 rounded p-4
          ${loading ? 'bg-gray-50' : 'bg-indigo-900'}`}
        disabled={loading}
      >
        {loading ? 'loading...' : 'Register'}
      </button>
    </form>
  )
}

export default RegisterForm
