import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface ReactQueryProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
})

export const ReactQueryProvider: FC<ReactQueryProviderProps> = (props) => {
  const { children } = props

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
