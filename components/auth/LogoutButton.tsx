// import useCustomToast from "@/hooks/useCustomToast";
import {useRouter} from "next/navigation";
import {signOut } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";
import {useToast} from "@/components/ui/use-toast";


export default function LogoutButton() {
  const { toast } = useToast()
  const router = useRouter();

  const customSignOut = async () => {
    toast({
      title: 'You have logged out successfully.'
    })
    await signOut({ redirect: false });
  }
  return (
    <Button onClick={() =>{ customSignOut() }}>Logout</Button>
  )
}