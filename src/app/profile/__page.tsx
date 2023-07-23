'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { cache, use } from 'react'

type User = {
  id: number
  name: string
  email: string
}

const getUsers = cache(() =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
)

/** クライアントコンポーネントでルート保護する場合 */
export default function Page() {
  const { status } = useSession({
    required: true,
    // ユーザーがログインしていない場合は、サインインページにリダイレクトする
    onUnauthenticated() {
      redirect('/api/auth/signin')
    }
  })

  if (status === 'loading') {
    return <p>Loading....</p>
  }

  const users = use<User[]>(getUsers())

  return (
    <main className='max-w-screen-xl p-5'>
      <div className='grid grid-cols-4 gap-5'>
        {users.map((user) => (
          <div key={user.id} className='border border-white text-center'>
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              className='h-40 w-40 mx-auto'
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}
