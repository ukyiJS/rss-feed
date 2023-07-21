import type { QueryClientConfig } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 20 * 1000,
    },
  },
};

const queryClient = cache(() => new QueryClient(queryClientOptions));
export default queryClient;
