import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Components/Products.jsx'
import Register from './Components/Register.jsx'
import Cart from './Components/Cart.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import UserProvider from './Context/UserContext.jsx'
import CartProvider from './Context/CartContext.jsx'
import ThemeProvider from './Context/ThemeContext.jsx'
import Contact from './Components/Contact.jsx'



  let router=createBrowserRouter([

    {
      path:"/",
      element:<App></App>,
      children :[
        {
          path:"/home",
          element:<Home></Home>
        },
        {
          path:"/products",
          element:<Products></Products>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
    ]
    }
  ])

  createRoot(document.getElementById("root")).render(

    <ThemeProvider>
      <CartProvider>
        <UserProvider>
          <RouterProvider router={router}></RouterProvider>
        </UserProvider>
      </CartProvider>
    </ThemeProvider>
  )



