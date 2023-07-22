import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton
} from '@/components/buttons'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { User } from './user'

export default async function Page() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <main className='flex flex-col justify-center items-center text-center h-screen'>
      <div>
        <LoginButton />
        <LogoutButton />
        <RegisterButton />
        <ProfileButton />
      </div>
      <div className='mt-5'>
        <h1>Server Session</h1>
        <pre>
          <code>{JSON.stringify(session)}</code>
        </pre>
      </div>
      <User />
    </main>
  )
}
