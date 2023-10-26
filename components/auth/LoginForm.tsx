"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {Stack, Heading, FormControl, FormLabel, Input, Button, FormErrorMessage, Center} from "@chakra-ui/react";
import { z } from 'zod';

const schema = z.object({
  email: z.string().email("Nieprawidłowy adres e-mail"),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Center>
          <Heading as='h1' size='lg'>
            Login to your account
          </Heading>
        </Center>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' {...register('email')} />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type='password' {...register('password')} />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme='blue' type="submit">Login</Button>
      </Stack>
    </form>
  );
};

export default LoginForm;

