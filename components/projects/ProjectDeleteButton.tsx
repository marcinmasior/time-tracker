'use client'

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useToast} from "@/components/ui/use-toast";
import {useState} from "react";
import {
  AlertDialog, AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

interface ProjectDeleteButtonProps {
  id: string
}

const ProjectDeleteButton: React.FC<ProjectDeleteButtonProps> = ({id}) => {
  const { toast } = useToast()
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = async () => {
    const response = await fetch(`/api/dashboard/projects/${id}`, {
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
    <>
      <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>Delete</Button>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This preset will no longer be
              accessible by you.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>

  )
}

export default ProjectDeleteButton