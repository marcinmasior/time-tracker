import React from 'react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {XCircle} from "lucide-react";
import EmptyDataPlaceholder from "@/components/shared/data/EmptyDataPlaceholder";

interface DataHandlerClientProps<T> {
  loading: boolean;
  error: any;
  data: T[] | null;
  emptyTitle?: string;
  emptyDescription?: string;
  children: React.ReactNode
}

const DataHandlerClient: React.FC<DataHandlerClientProps<any>> = ({
                                                        loading,
                                                        error,
                                                        data,
                                                        emptyTitle="No Records",
                                                        emptyDescription,
                                                        children,
                                                      }) => {
  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <Alert variant="destructive">
        <XCircle />
        <AlertTitle>Fetch Failed</AlertTitle>
        <AlertDescription>
          Refresh page or try again later
        </AlertDescription>
      </Alert>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyDataPlaceholder title={emptyTitle} description={emptyDescription} />;
  }

  return <>{children}</>;
};

export default DataHandlerClient;
