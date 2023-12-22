import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Componenets/Routes.jsx'

import Authentication from './providers/Authentication.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authentication>
   <RouterProvider router={Routes}>
    </RouterProvider>
   </Authentication>
  </React.StrictMode>,
)
