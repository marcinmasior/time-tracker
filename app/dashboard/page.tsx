'use client'

import React from "react";
import {Button, Heading, Stack} from "@chakra-ui/react";
import {signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useCustomToast from "@/hooks/useCustomToast";

export default function Dashboard() {
  const toast = useCustomToast();
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login")
    },
  })

  const customSignOut = async () => {
    toast.success('You have logged out successfully.')
    await signOut({ redirect: false });
  }

  return <>
    <Stack spacing={3}>
      <Heading>Welcome to Dashboard</Heading>
      <p>Current user: {session?.user?.email}</p>
      <Button colorScheme='blue' onClick={() =>{ customSignOut() }}>Logout</Button>
    </Stack>
  </>
}