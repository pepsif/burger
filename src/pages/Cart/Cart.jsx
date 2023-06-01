import './Cart.css'
import { useEffect } from "react";
import CartReturnBlock from "./CartReturnBlock/CartReturnBlock";
import CartItem from './CartItem/CartItem';

export default function Cart() {
 

    useEffect(() =>{
        const rootBlock =  document.getElementById('root')
        const rootHeight = rootBlock.style.height
    
        rootBlock.style.height = "90vh"
      
        return() => {
            rootBlock.style.height = rootHeight
        }
        
      })

    return(
        <div className="cart">
            <CartReturnBlock/>
            <CartItem/>
            <CartItem/>
        </div>
    )
}
