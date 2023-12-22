import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Componenets/Routes.jsx'

import Authentication from './providers/Authentication.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authentication>
        <RouterProvider router={Routes}>
        </RouterProvider>
      </Authentication>
    </QueryClientProvider>
  </React.StrictMode>,
)
