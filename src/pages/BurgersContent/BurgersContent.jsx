import styles from "./BurgersContent.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBurgersArray,setBurgersArray } from "../../redux/BurgersSlice/BurgersSlice";
import Burger from "../../components/BurgerCard/Burger.tsx";

export default function BurgersContent() {

  const burgers = useSelector((state) => state.burgers.data);
  const burgersIsFetch = useSelector((state) => state.burgers.status);
  const dispatch = useDispatch();

  useEffect(() => {

   localStorage.getItem('burgersArray') ? dispatch(setBurgersArray(JSON.parse(localStorage.getItem('burgersArray'))))  : dispatch(fetchBurgersArray())

  },[] );

  return (
    <section className={styles.burger_section}>
      <div className={"container" + " " + styles.burgers_container}>
        <div className={styles.burgers_cards}>

          {burgersIsFetch === "loading" ? <p>LOADING...</p> : ""}
          {burgersIsFetch === "failed" ? <p>Нажаль сервіс зараз недоступний,спробуйте трохи пізніше (</p> : ""}
          {burgers ? burgers.map((el, i) => {
            return <Burger {...burgers[i]} key={i}/>;
          }) : <p>нажаль бургерів зараз немає</p> 
          }
        </div>
      </div>
    </section>
  );
}
