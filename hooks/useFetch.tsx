"use client"

import { useState, useEffect } from 'react';
import {useToast} from "@/components/ui/use-toast";

function useFetch<T>(url: string): UseFetchResponse<T> {
  const { toast } = useToast()

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          toast({
            title: 'There was a problem fetching the data. Please try again later.',
            variant: "destructive"
          })
        }

        const result = await response.json();
        setData(result.records);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
