import React from 'react'
import ReactDOM from 'react-dom/client'

import {QueryClientProvider} from 'cards/QueryClientProvider'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
