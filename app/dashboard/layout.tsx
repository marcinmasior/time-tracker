"use client"

import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function DashboardLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login")
    },
  })

  return (
    <>
      {children}
    </>
  )
}