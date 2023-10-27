import NextAuth from 'next-auth'
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: { }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }