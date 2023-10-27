'use client'

import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from 'next/link'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";

export default function SignUp() {
  const router = useRouter();

  const { data: session } = useSession()
  if(session) router.push('/dashboard');

  return <>
    <Card>
      <CardHeader>
        <CardTitle>Create new account</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm></SignUpForm>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <div>Do you have and account?</div>
        <div><Link href='/auth/login'>Sign In here</Link></div>
      </CardFooter>
    </Card>
  </>
}