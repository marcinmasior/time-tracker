'use client'

import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from 'next/link'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const { data: session } = useSession()
  if(session) router.push('/dashboard');

  return <>
    <div>
      Create new account

      <SignUpForm></SignUpForm>

      Or

      <Link href='/auth/login'>Sign In</Link>
    </div>
  </>
}