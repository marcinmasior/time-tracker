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

const formSchema = z.object({
  name: z.string().min(1)
});

interface TimeSheetFormProps {
  id?: number,
  onClose?: () => void
}

const TimeSheetForm: React.FC<TimeSheetFormProps> = ({id, onClose}) => {
  const { toast } = useToast()
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch('/api/timesheets', {
      method: 'POST',
      body: JSON.stringify(values)
    })

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

      router.refresh();
      if (onClose) onClose();
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
          {onClose ? <Button type="button" variant="secondary" className="w-full" onClick={onClose}>Cancel</Button> : null}
          <Button type="submit" className="w-full">Add</Button>
        </div>
      </form>
    </Form>
  );
};

export default TimeSheetForm;

