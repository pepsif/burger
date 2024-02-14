import styles from "./BurgersContent.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBurgersArray } from "../../redux/BurgersSlice/BurgersSlice";
import Burger from "../../components/BurgerCard/Burger.tsx";

export default function BurgersContent() {
  const burgers = useSelector((state) => state.burgers.data);
  const localBurgers = JSON.parse(localStorage.getItem('burgers'));
  const burgersIsFetch = useSelector((state) => state.burgers.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (burgers.length > 0) return;
    dispatch(fetchBurgersArray());
  }, [localBurgers]);

  return (
    <section className={styles.burger_section}>
      <div className={"container" + " " + styles.burgers_container}>
        <div className={styles.burgers_cards}>
          {burgersIsFetch === "loading" ? <p>LOADING...</p> : ""}
          { localBurgers.length > 0 ? localBurgers.map((el, i) => {
            return <Burger {...localBurgers[i]} key={i} />;
          }) : burgers.map((el, i) => {
            return <Burger {...burgers[i]} key={i} />;
          })
          }
        </div>
      </div>
    </section>
  );
}
