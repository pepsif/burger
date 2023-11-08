import styles from './BurgersContent.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch  } from "react-redux";
import { fetchBurgersArray } from '../../redux/BurgersSlice/BurgersSlice';
import Burger from "../../components/BurgerCard/Burger.tsx";

export default function BurgersContent() {
  const burgers = useSelector((state) => state.burgers.data);
  const burgersIsFetch = useSelector((state) => state.burgers.status);
  const dispatch = useDispatch();

  

  useEffect( () => {
    
    if(burgers.length > 0) return
  dispatch(fetchBurgersArray())
  }, [dispatch] )

   return (
    <section className={styles.burger_section}>
      <div className={"container"+" "+ styles.burgers_container}>
        <div className={styles.burgers_cards}>
                
                { (burgersIsFetch === 'loading') ? <p>LOADING...</p> : '' }
          {burgers.map((el, i) => {
           
           return <Burger {...burgers[i]} key={i}/>
           
          })}
        </div>
      </div>
    </section>
  );
}
