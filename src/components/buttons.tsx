'use client'

import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export const LoginButton = () => {
  return (
    <button
      className='p-1 mr-2.5 bg-indigo-900 bg-opacity-75 rounded'
      onClick={() => signIn()}
    >
      Sign in
    </button>
  )
}

export const RegisterButton = () => {
  return (
    <Link className='mr-2.5 hover:underline' href='/register'>
      Register
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <button
      className='p-1 mr-2.5 bg-indigo-900 bg-opacity-75 rounded'
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  )
}

export const ProfileButton = () => {
  return (
    <Link className='mr-2.5 hover:underline' href='/profile'>
      Profile
    </Link>
  )
}
