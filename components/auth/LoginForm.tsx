import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {toast, useToast} from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type Inputs = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const { toast } = useToast()
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn('credentials', {...values, redirect: false})

    if(!response) {
      toast({
        title: 'Something went wrong! Try again later.',
        variant: "destructive"
      })
      return;
    }

    if(!response.ok && response.status === 401){
      toast({
        title: 'Incorrect email or password.',
        variant: "destructive"
      })
    }else{
      router.push('/dashboard')
      toast({
        title: 'Welcome! You have logged in successfully'
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;

