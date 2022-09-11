import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { createClient } from 'contentful'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const client = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

const getRes = async () => {
  const res = await client.getEntries({ content_type: 'product' })
  console.log(res.items)
}

getRes()

import App1 from './App1'

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
