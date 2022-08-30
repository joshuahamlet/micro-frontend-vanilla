import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
)