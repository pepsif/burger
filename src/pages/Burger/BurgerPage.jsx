import styles from "./BurgerPage.module.css";
import ReturnBlock from "./ReturnBlock/ReturnBlock";
import QuantityBlock from "./QuantityBlock/QuantityBlock";
import ImageBlock from "./ImageBlock/Image.block";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";

import  { useEffect } from "react";

export default function BurgerPage() {
    const localBurgerId = JSON.parse(localStorage.getItem('burgerId')) ;
  // const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);
  // const burger = useSelector((state) => state.burgers.data[localBurgerId]);
  const localBurger = JSON.parse(localStorage.getItem('burgersArray'))[localBurgerId];

  console.log(window.location.pathname)

const burgerStyles = {
    background: localBurger.gradient,
    borderRadius: "8% 8% 0% 0% / 10% 10% 10% 10% ",
}

  useEffect(() => {
    const root = document.querySelector("#root");
    root.style.backgroundColor = "#f0b944";

    return () => {root.style.backgroundColor = "white";};
  });

  return (
    
    <div className={styles.burger_container + " " + "container"} style={burgerStyles}>


      <div style={burgerStyles} >
              
        <ReturnBlock />
        <ImageBlock />
      </div>

      <DescriptionBlock />
      <QuantityBlock />
      {/* <ButtonBlock /> */}

    </div>
  );
}
