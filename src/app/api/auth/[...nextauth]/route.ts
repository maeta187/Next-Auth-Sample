import { authOptions } from '@/lib/auth'
import NextAuth from 'next-auth'

/**
 * NextAuth からの認証リクエストを処理できる API ルート
 * アプリケーションで使用するためにGETおよびPOST関数としてエクスポートする
 * その際は、[...nextauth]ディレクトに内に作成する
 */
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
