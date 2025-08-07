import { createContext, useState } from "react"

export let CartContext=createContext()

function CartProvider(props){
    let [cart,setcart]=useState([])

return(
    <CartContext.Provider value={{cart,setcart}}>
        {props.children}
    </CartContext.Provider>
)
}
export default CartProvider