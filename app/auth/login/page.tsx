'use client'

import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import Link from 'next/link'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function Login() {
  const router = useRouter();

  const { data: session } = useSession()
  if(session) router.push('/dashboard');

  return <>
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm></LoginForm>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <div>Don't have an account?</div>
        <div><Link href='/auth/signup'>Sign Up here</Link></div>
      </CardFooter>
    </Card>
  </>
}