import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import AuthProvider from './Component/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={MainLayout}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
