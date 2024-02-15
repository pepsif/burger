import styles from './Cart.module.scss';
import { useSelector } from "react-redux";
import CartReturnBlock from "./CartReturnBlock/CartReturnBlock";
import CartItem from "./CartItem/CartItem";
import CartTotalSumBlock from "./CartTotalSumBlock/CartTotalSumBlock";
import Button from "@mui/material/Button";

export default function Cart() {
  const burgers = useSelector((state) => state.burgers.data);

  const result = burgers.filter((el) => el.value > 0);


  return (
    <section className={styles.cart}>
      <div className={'container'+' '+ styles.cart_container }>
        <CartReturnBlock />
        <div className={styles.cart_items_block}>
          {
            localStorage.getItem("cart") &&
          JSON.parse(localStorage.getItem("cart")).length > 0 ? (
            JSON.parse(localStorage.getItem("cart")).map((el, i) => {
              return <CartItem {...el} key={i} />;
            })
          ) : (
            <p>На жаль ви нічого не купили</p>
          )}
        </div>

        <CartTotalSumBlock />
        <Button className={styles.payment_button} variant="contained">
          Оплатити
        </Button>
      </div>
    </section>
  );
}
