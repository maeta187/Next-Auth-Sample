'use client'

import { useSession } from 'next-auth/react'

export const User = () => {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Client Session</h1>
      <pre className='text-xs'>
        <code>{JSON.stringify(session)}</code>
      </pre>
    </div>
  )
}
