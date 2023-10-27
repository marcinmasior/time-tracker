export default function AuthLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return (
    <div className="container w-4/12 pt-40">
      {children}
    </div>
  )
}