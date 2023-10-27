// import useCustomToast from "@/hooks/useCustomToast";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";


export default function LogoutButton() {
  // const toast = useCustomToast();
  const router = useRouter();

  const customSignOut = async () => {
    // toast.success('You have logged out successfully.')
    await signOut({ redirect: false });
  }
  return (
    <Button onClick={() =>{ customSignOut() }}>Logout</Button>
  )
}