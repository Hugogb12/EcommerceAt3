import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CustomProvider } from "rsuite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import Carrinho from './pages/Carrinho.jsx'
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Cart from './pages/Products.jsx';
import CheckoutPage from './pages/Checkout.jsx';
import Status from './pages/Status.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Carrinho",
    element: <Carrinho />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/Cart",
    element: <Cart />
  },
  {
    path: "/Checkout",
    element: <CheckoutPage/>
  },
  {
    path: "/Status",
    element: <Status />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomProvider theme="light">
      <RouterProvider router={router} />
    </CustomProvider>
  </StrictMode>
);
