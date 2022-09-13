import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider, QueryClient } from 'react-query'

import App1 from './App1'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App1 standalone />
    </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
