import LoginForm from './LoginForm'

export default function Page() {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className='w-screen'>
        <h1 className='w-6/12 mx-auto'>Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}
