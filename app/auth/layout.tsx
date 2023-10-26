import {Container} from "@chakra-ui/react";

export default function AuthLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return (
    <Container maxW='md' paddingTop={24}>
      {children}
    </Container>
  )
}