import RegisterForm from './RegisterForm'

export default function Page() {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className='w-screen'>
        <h1 className='w-6/12 mx-auto'>Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
