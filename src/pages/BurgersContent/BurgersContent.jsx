import styles from './BurgersContent.module.scss'
import { useSelector } from "react-redux";
import Burger from "../../components/BurgerCard/Burger.tsx";

export default function BurgersContent() {
  const burgers = useSelector((state) => state.burgers.data);

   return (
    <section className={styles.burger_section}>
      <div className={"container"+" "+ styles.burgers_container}>
        <div className={styles.burgers_cards}>
                
          {burgers.map((el, i) => {
           
           return <Burger {...burgers[i]} key={i}/>
           
          })}
        </div>
      </div>
    </section>
  );
}
