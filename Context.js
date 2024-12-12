import React , { createContext,useState} from "react";

export const CartItems = createContext()

const BasketContext =({children}) =>{
    const [Cart,setCart] =useState([])
    return(
        <CartItems.Provider value={{Cart,setCart}}>
          {children}
        </CartItems.Provider>
    )
}

export {BasketContext};