import React, { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Laoading from '../../../githubcards/src/Github/MyShop/Laoading'
import { useContext } from 'react'
import './Product.css'
import { CartContext } from '../Context/CartContext'

function Products() {

  let [products,setproducts]= useState([])
  let [isloading,setloading]=useState(true)
  let [url,seturl]=useState("https://dummyjson.com/products")

  useEffect(()=>{

    fetch(url).then((res)=>{

      res.json().then((result)=>{

        console.log(result);
        

        setproducts(result.products)
        setloading(false)

      })
    }).catch((error)=>{
      console.log(error);
      
    })
  },[url])

  let {user}=useContext(UserContext)
  let {cart}=useContext(CartContext)

  function handleClick(product){

    if(user != null){

      cart.push(product)
      alert("Product is added to Cart")
    }
    else{
      alert("Login first")
    }
  }

  return (
   
    <div>
            <h1 className="head">E-commerce Website</h1>
            <span className="opt">
                <button onClick={()=>{seturl("https://dummyjson.com/products")}}>All</button>
                <button onClick={()=>{seturl("https://dummyjson.com/products/category/beauty")}}>Beauty</button>
                <button onClick={()=>{seturl("https://dummyjson.com/products/category/fragrances")}}>Fragrances</button>
                <button onClick={()=>{seturl("https://dummyjson.com/products/category/furniture")}}>Furniture</button>
            </span>
            <br></br>
            <br></br>
            {
               isloading?<Laoading></Laoading>: products.map((product)=>{
                    return (
                        <div className="div">
                            
                            <h1>{product.brand}</h1>
                            <h2>{product.description}</h2>
                            <img src={product.thumbnail}></img>
                            <p>{product.price}</p>
                            <p>Rating:${product.rating}</p>
    
                            <button className='bt1'><Link to={`/details/${product.id}`}>View Details</Link></button>
                            <button className='bt2'  onClick={()=>{handleClick(product)}}>Add to Cart</button>
                        </div>
                    )
                    
                })
            }
    
        </div>
  )
}

export default Products
