'use client'

import Link from "next/link";
import UserMenu from "@/components/shared/navbar/UserMenu";

export default function Navbar() {


  return (
    <div className="border-b">
      <div className="container flex h-16 items-center">
        <h2 className="text-lg font-semibold ">Time Tracker App</h2>
        <nav className="flex items-center space-x-4 lg:space-x-6 ms-5">
          <Link
            href="/dashboard/timesheets"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Your Time Sheets
          </Link>
          <Link
            href="/dashboard/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Projects
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </div>

  )
}