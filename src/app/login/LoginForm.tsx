'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

const LoginForm = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await signIn('credentials', {
        email: formValues.email,
        password: formValues.password,
        redirect: false
      })
      if (session) {
        setLoading(false)
        router.replace('/')
      } else {
        throw new Error('ログインできませんでした。')
      }
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
        {loading ? 'loading...' : 'Login'}
      </button>
    </form>
  )
}

export default LoginForm
