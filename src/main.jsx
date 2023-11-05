import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Routers.jsx'
import AuthProvider from './authentication/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={Routers} />
    </AuthProvider>
    <Toaster></Toaster>
    </QueryClientProvider>
  </React.StrictMode>,
)
