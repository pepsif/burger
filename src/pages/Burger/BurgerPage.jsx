import styles from "./BurgerPage.module.css";
import { useSelector } from "react-redux";
import ReturnBlock from "./ReturnBlock/ReturnBlock";
import QuantityBlock from "./QuantityBlock/QuantityBlock";
import ImageBlock from "./ImageBlock/Image.block";
import { useEffect } from "react";

export default function BurgerPage() {
  const burgers = useSelector((state) => state.burgers.data);
  const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

 useEffect(() =>{
    const rootBlock =  document.getElementById('root')

    rootBlock.style.backgroundColor = "inherit"
    
    return() => {
        rootBlock.style.backgroundColor = "white"
    }
  })

    return (
    <div className={ styles.burger_container + " " + "container" }>
     <div  style={{background:burgers[activeBurgerId].background,borderRadius:"30px"}}>
       <ReturnBlock />
      <ImageBlock />
     </div>
     

      <div className={styles.burger_description_block}>
        <h3 className={styles.burger_title}>{burgers[activeBurgerId].title}</h3>
        <p className={styles.burger_calories}>
          {burgers[activeBurgerId].calories}
        </p>
        <p className={styles.burger_description}>
          {burgers[activeBurgerId].description}
        </p>
        {/*<p>Склад: {burgers[activeBurgerId].composition.join(',')}</p>*/}
      </div>

      <QuantityBlock />

      <div className={styles.button_block}>
        <button className={styles.customize}>Customize</button>
        <button className={styles.add}>
          Add to Cart <span className={styles.add_button_cost}>₴00.00</span>
        </button>
      </div>
    </div>
  );
}
