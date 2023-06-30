import "./Cart.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartReturnBlock from "./CartReturnBlock/CartReturnBlock";
import CartItem from "./CartItem/CartItem";
import CartTotalSumBlock from "./CartTotalSumBlock/CartTotalSumBlock";

export default function Cart() {
 const burgers = useSelector(state => state.burgers.data)
 const result = burgers.filter(el => el.value > 0)
 
  useEffect(() => {
    const rootBlock = document.getElementById("root");
    const rootHeight = rootBlock.style.height;

    rootBlock.style.height = "90vh";

    

    return () => {
      rootBlock.style.height = rootHeight;
    };
  });

  
  return (
    <div className="cart">
       <CartReturnBlock/>
      <div className="cart-items-block">
        {
          result.map((el,i) => {
           return <CartItem  {...el} key={i}/>
            
          })
        }
        
      </div>

      <CartTotalSumBlock />
    </div>
  );
}
