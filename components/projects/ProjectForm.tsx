"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {useRouter} from "next/navigation";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { useToast} from "@/components/ui/use-toast";
import {Project} from ".prisma/client";
import {Checkbox} from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(1),
  active: z.boolean().default(true).optional()
});

interface ProjectFormProps {
  project?: Project
}

const ProjectForm: React.FC<ProjectFormProps> = ({project=null}) => {
  const { toast } = useToast()
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project ? project.name : '',
      active: project ? project.active : true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const method = project ? 'PUT' : 'POST';
    const url = project ? `/api/dashboard/projects/${project.id}` : '/api/dashboard/projects';

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
      router.push('/dashboard/projects')
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
        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Active
                </FormLabel>
                <FormDescription>
                  If checked, the project will be displayed on the lists.
                </FormDescription>
              </div>
            </FormItem>

          )}
        />
        <div className="flex gap-3">
          <Button type="submit" className="w-full">{project ? 'Update' : 'Create'}</Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectForm;

