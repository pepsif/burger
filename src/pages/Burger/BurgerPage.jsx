import styles from "./BurgerPage.module.css";
import { useSelector } from "react-redux";

import ReturnBlock from "./ReturnBlock/ReturnBlock";
import QuantityBlock from "./QuantityBlock/QuantityBlock";
import ImageBlock from "./ImageBlock/Image.block";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";
import React, { useEffect } from "react";

export default function BurgerPage() {
  const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);
  const burger = useSelector((state) => state.burgers.data[activeBurgerId]);


  useEffect(() => {
    const root = document.querySelector("#root");
    root.style.backgroundColor = "#f0b944";
   
    
    return () => {root.style.backgroundColor = "white";};
  });

  return (
    
    <div className={styles.burger_container + " " + "container"}>
    { console.log(burger,activeBurgerId) }
      <div style={{ background: burger.background, borderRadius: "8% 8% 0% 0% / 10% 10% 10% 10% ", }} >
              
        <ReturnBlock />
        <ImageBlock />
      </div>

      <DescriptionBlock />
      <QuantityBlock />
      {/* <ButtonBlock /> */}
    </div>
  );
}
