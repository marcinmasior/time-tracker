'use client'

import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import Link from 'next/link'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Login() {
  const router = useRouter();

  const { data: session } = useSession()
  if(session) router.push('/dashboard');

  return <>
    <div>
      Login to your account

      <LoginForm></LoginForm>

      Or

      <Link href='/auth/signup'>Sign Up</Link>
    </div>
  </>
}