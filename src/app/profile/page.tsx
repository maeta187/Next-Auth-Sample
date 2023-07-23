import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

type User = {
  id: number
  name: string
  email: string
}

/** サーバーコンポーネントでルート保護する場合 */
export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  const users: User[] = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then((res) => res.json())

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
