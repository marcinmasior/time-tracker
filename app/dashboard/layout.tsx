"use client"

import Navbar from "@/components/shared/navbar/Navbar";

export default function DashboardLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return (<>
      <Navbar />
      <main className="container mt-12">
        {children}
      </main>
  </>

  )
}