import { createBrowserRouter, Navigate } from "react-router";
import App from './App.jsx'
import Kids from "./pages/Kids.jsx";
import Shop from "./pages/Shop.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/kids',
        element: <Kids />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/women',
        element: <Women />
      },
    ]
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/product/:productId',
    element: <Product />
  },
  {
    path: '/login',
    element: <LoginSignup />
  }
])