import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton
} from '@/components/buttons'

export default function Page() {
  return (
    <main className='flex justify-center items-center h-screen'>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
      <div>
        <RegisterButton />
        <ProfileButton />
      </div>
    </main>
  )
}
