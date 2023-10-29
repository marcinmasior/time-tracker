"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {useRouter} from "next/navigation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { useToast} from "@/components/ui/use-toast";
import {TimeSheet} from ".prisma/client";

const formSchema = z.object({
  name: z.string().min(1)
});

interface TimeSheetFormProps {
  timeSheet?: TimeSheet
}

const TimeSheetForm: React.FC<TimeSheetFormProps> = ({timeSheet=null}) => {
  const { toast } = useToast()
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: timeSheet ? timeSheet.name : '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const method = timeSheet ? 'PUT' : 'POST';
    const url = timeSheet ? `/api/timesheets/${timeSheet.id}` : '/api/timesheets';

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if(!response) {
      toast({
        title: 'Something went wrong! Try again later.',
        variant: "destructive"
      })
      return;
    }

    const jsonData =  await response.json();

    if(jsonData.status === 'success'){
      toast({
        title: jsonData.message,
        description: jsonData.description,
      })
      router.push('/dashboard/timesheets')
      router.refresh();
    }else{
      toast({
        title: jsonData.message,
        description: jsonData.description,
        variant: "destructive"
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3">
          <Button type="submit" className="w-full">{timeSheet ? 'Update' : 'Create'}</Button>
        </div>
      </form>
    </Form>
  );
};

export default TimeSheetForm;

