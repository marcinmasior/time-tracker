"use client"

import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";

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

  return (<>
      <Navbar />
      <main className="container mt-12">
        {children}
      </main>
  </>

  )
}