import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './Router'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './context/NotificationContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </NotificationProvider>
  </StrictMode>,
)
