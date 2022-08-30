import React from 'react'
import ReactDOM from 'react-dom/client'

import App2 from './App2'

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <App2 standalone />
  </React.StrictMode>
)