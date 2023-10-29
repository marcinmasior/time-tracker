import {signOut } from "next-auth/react";
import React from "react";
import {useToast} from "@/components/ui/use-toast";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {useRouter} from "next/navigation";


export default function LogoutMenuItem() {
  const { toast } = useToast()
  const router = useRouter();

  const customSignOut = async () => {
    toast({
      title: 'You have logged out successfully.'
    })
    await signOut({ redirect: false });
    router.refresh();
  }
  return (
    <DropdownMenuItem onClick={() =>{ customSignOut() }}>
      Log out
    </DropdownMenuItem>
  )
}