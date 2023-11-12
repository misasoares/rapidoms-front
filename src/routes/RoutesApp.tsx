import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyNavbar from "../components/Navbar/MyNavbar";
import Products from "../pages/Products";
import CriarProduto from "../pages/CriarProduto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar children={<Home />}/>,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/noticias",
    element:  <MyNavbar children={<h1>NOTICIAS</h1>}/>,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/contatos",
    element: <MyNavbar children={<h1>CONTATOS</h1>}/>,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path:'/produtos',
    element:<MyNavbar children={<Products/>}/>
  },
  {
    path:'/criar-produto',
    element:<CriarProduto/>
  }
 
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
