'use client'

import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import {AbsoluteCenter, Box, Center, Divider, Heading} from "@chakra-ui/react";
import Link from 'next/link'
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { data: session } = useSession()
  if(session) router.push('/dashboard');

  return <>
    <Center marginBottom={12}>
      <Heading as='h1' size='lg'>
        Create new account
      </Heading>
    </Center>

    <SignUpForm></SignUpForm>

    <Box position='relative' marginTop='2rem'>
      <Divider />
      <AbsoluteCenter bg='white' px='4'>
        Or
      </AbsoluteCenter>
    </Box>

    <Center marginTop='2rem'>
      <Link href='/auth/login'>Sign In</Link>
    </Center>
  </>
}