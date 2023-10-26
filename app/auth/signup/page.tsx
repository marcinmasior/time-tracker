import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import {AbsoluteCenter, Box, Center, Divider} from "@chakra-ui/react";
import Link from 'next/link'

export default function Page() {
  return <>
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