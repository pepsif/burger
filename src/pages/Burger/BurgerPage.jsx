import styles from "./BurgerPage.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ReturnBlock from "./ReturnBlock/ReturnBlock";
import QuantityBlock from "./QuantityBlock/QuantityBlock";
import ImageBlock from "./ImageBlock/Image.block";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";

export default function BurgerPage() {
  const burgers = useSelector((state) => state.burgers.data);
  const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

  useEffect(() => {
    const rootBlock = document.getElementById("root");

    rootBlock.style.backgroundColor = "inherit";

    return () => {
      rootBlock.style.backgroundColor = "white";
    };
  });

  return (
    <div className={styles.burger_container + " " + "container"}>
      <div style={{ background: burgers[activeBurgerId].background, borderRadius: "30px", }} >
        <ReturnBlock />
        <ImageBlock />
      </div>

      <DescriptionBlock />
      <QuantityBlock />
      <ButtonBlock />
    </div>
  );
}
