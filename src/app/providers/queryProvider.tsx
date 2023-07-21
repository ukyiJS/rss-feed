'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { queryClientOptions } from '@/app/providers/queryClient';

export default function QueryProvider({ children }: PropsWithChildren): JSX.Element {
  const [queryClient] = useState(new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
