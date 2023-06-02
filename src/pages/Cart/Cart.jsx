import "./Cart.css";
import { useEffect } from "react";
import CartReturnBlock from "./CartReturnBlock/CartReturnBlock";
import CartItem from "./CartItem/CartItem";
import CartTotalSumBlock from "./CartTotalSumBlock/CartTotalSumBlock";

export default function Cart() {
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
      <CartReturnBlock />
      <div className="cart-items-block">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <CartTotalSumBlock />
    </div>
  );
}
