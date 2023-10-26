import {Button, FormControl, FormLabel, ListItem, Spinner, Switch, UnorderedList} from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <h1>Hello World from next js app</h1>

      <div>
        <h2>Here are some example components:</h2>

        <UnorderedList>
          <ListItem><Button colorScheme='blue'>Button</Button></ListItem>
          <ListItem><Code colorScheme='red'>var chakra = &apos;awesome!&apos;</Code></ListItem>
          <ListItem>
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='email-alerts' mb='0'>
                Enable email alerts?
              </FormLabel>
              <Switch id='email-alerts' />
            </FormControl>
          </ListItem>
          <ListItem><Spinner /></ListItem>
        </UnorderedList>
      </div>
    </main>
  )
}
