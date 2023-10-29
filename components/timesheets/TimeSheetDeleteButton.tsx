'use client'

import {Button} from "@/components/ui/button";
import {headers} from "next/headers";
import {useRouter} from "next/navigation";
import {useToast} from "@/components/ui/use-toast";


interface TimeSheetDeleteButtonProps {
  id: string
}

const TimeSheetDeleteButton: React.FC<TimeSheetDeleteButtonProps> = ({id}) => {
  const { toast } = useToast()
  const router = useRouter();

  const handleDeleteClick = async () => {
    const response = await fetch(`/api/dashboard/timesheets/${id}`, {
        method: "DELETE"
      }
    )

    const jsonData =  await response.json();

    if(jsonData.status === 'success'){
      toast({
        title: jsonData.message,
        description: jsonData.description,
      })
      router.refresh();
    }else{
      toast({
        title: jsonData.message,
        description: jsonData.description,
        variant: "destructive"
      })
    }

  };


  return (
    <Button onClick={handleDeleteClick}>Delete</Button>
  )
}

export default TimeSheetDeleteButton