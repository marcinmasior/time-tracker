import React from "react";
import {Button, Heading, Stack} from "@chakra-ui/react";

export default function Dashboard() {
  return <>
    <Stack spacing={3}>
      <Heading>Welcome to Dashboard</Heading>
      <p>Current user: ...</p>
      <Button colorScheme='blue'>Logout</Button>
    </Stack>
  </>
}