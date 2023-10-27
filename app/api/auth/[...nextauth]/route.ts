import NextAuth from 'next-auth'
import type { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@/prisma/client";
import {comparePassword} from "@/utils/hashing";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {

        const email = credentials?.email;
        const password = credentials?.password;

        if(!email || !password) return null;

        let user = await prisma.user.findUnique({
          where: { email }
        })

        if(!user) return null;

        const passwordMatch = await comparePassword(password, user.password);

        if(!passwordMatch) return null;

        return {
          id: user.id,
          email: user.email
        }
      }
    })
  ]
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }