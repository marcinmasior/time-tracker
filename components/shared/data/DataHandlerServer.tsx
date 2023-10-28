import React from 'react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {XCircle} from "lucide-react";
import EmptyDataPlaceholder from "@/components/shared/data/EmptyDataPlaceholder";

interface DataHandlerServerProps<T> {
  status: string;
  message: string;
  data: T[] | null;
  emptyTitle?: string;
  emptyDescription?: string;
  children: React.ReactNode
}

const DataHandlerServer: React.FC<DataHandlerServerProps<any>> = ({
                                                        status,
                                                        message,
                                                        data,
                                                        emptyTitle="No Records",
                                                        emptyDescription,
                                                        children,
                                                      }) => {

  if (status == 'error') {
    return (
      <Alert variant="destructive">
        <XCircle/>
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyDataPlaceholder title={emptyTitle} description={emptyDescription} />;
  }

  return <>{children}</>;
};

export default DataHandlerServer;
