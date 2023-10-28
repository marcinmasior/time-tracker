"use client"

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

interface DialogWithContentProps {
  buttonTitle?: string
  title?: string
  description?: string,
  children?: any;
}

const DialogWithContent: React.FC<DialogWithContentProps> = ({
                                                               buttonTitle = 'Open Dialog',
                                                               title = 'Dialog Title',
                                                               description,
                                                               children
                                                             }) => {

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button>{buttonTitle}</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {React.cloneElement(children, { onClose: handleClose })}
      </DialogContent>
    </Dialog>
  )
}

export default DialogWithContent;