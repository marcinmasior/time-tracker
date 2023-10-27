'use client'

import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";
import LogoutMenuItem from "@/components/shared/navbar/LogoutMenuItem";
import {User} from 'lucide-react';

export default function UserMenu() {
  const { data: session } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full text-muted-foreground" size="icon">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Logged in as</p>
            <p className="text-xs leading-none text-muted-foreground">
              { session?.user?.email }
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


