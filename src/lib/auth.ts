import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  // providersの設定、GitHubとGoogleの認証を有効にする
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      // 認証に必要な情報を設定
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'Admin', email: 'admin@admin.com' }
        return user
      }
    })
  ]
}
