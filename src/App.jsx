import { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Components/Navbar.css'
import { UserContext } from './Context/UserContext'
import { CartContext } from './Context/CartContext'
import {ThemeContext} from './Context/ThemeContext'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  
  let{user}=useContext(UserContext)
  let{theme,settheme}=useContext(ThemeContext)

  let bg={}

  if(theme==='light'){
    bg={
      backgroundColor:'white',
      color:'black'
    }
  }else{
      bg={
        backgroundColor:'black',
        color:'white'
      }
    }

  return (
    <div style={bg}>

      <nav>
        
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {
          theme==='light'?<DarkModeIcon style={{color:'white'}}  onClick={()=>{settheme('dark')}}></DarkModeIcon> : <LightModeIcon onClick={()=>{settheme('light')}}></LightModeIcon>
        }

      {
        user==null?
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>:
        <div>
          <span style={{color:'white'}}>
            welcome {user.name}
            <button>Logout</button>
          </span>
        </div>
      }
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App
