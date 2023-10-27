import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {Stack, FormControl, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react";
import { z } from 'zod';
import {signIn} from "next-auth/react";
import useCustomToast from "@/hooks/useCustomToast";
import {useRouter} from "next/navigation";

const schema = z.object({
  email: z.string().email("Nieprawidłowy adres e-mail"),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const toast = useCustomToast();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const response = await signIn('credentials', {...data, redirect: false})

    if(!response) {
      toast.error('Something went wrong! Try again later.');
      return;
    }

    if(!response.ok && response.status === 401){
      toast.error('Incorrect email or password.')
    }else{
      router.push('/dashboard')
      toast.success('Welcome! You have logged in successfully.')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
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

