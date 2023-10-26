import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import {AbsoluteCenter, Box, Center, Divider} from "@chakra-ui/react";
import Link from 'next/link'

export default function Page() {
  return <>
    <LoginForm></LoginForm>

    <Box position='relative' marginTop='2rem'>
      <Divider />
      <AbsoluteCenter bg='white' px='4'>
        Or
      </AbsoluteCenter>
    </Box>

    <Center marginTop='2rem'>
      <Link href='/auth/signup'>Sign Up</Link>
    </Center>
  </>
}