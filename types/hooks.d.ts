

type UseFetchResponse<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};