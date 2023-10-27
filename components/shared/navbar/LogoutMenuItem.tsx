import {signOut } from "next-auth/react";
import React from "react";
import {useToast} from "@/components/ui/use-toast";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";


export default function LogoutMenuItem() {
  const { toast } = useToast()

  const customSignOut = async () => {
    toast({
      title: 'You have logged out successfully.'
    })
    await signOut({ redirect: false });
  }
  return (
    <DropdownMenuItem onClick={() =>{ customSignOut() }}>
      Log out
    </DropdownMenuItem>
  )
}