import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Routers.jsx'
import AuthProvider from './authentication/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers} />
    </AuthProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
