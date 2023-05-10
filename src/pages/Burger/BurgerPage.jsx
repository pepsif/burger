import styles from './BurgerPage.module.css';

import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import heart from "../../assets/icons/PikPng.com_restart-icon-png_3823370.png";
import heartOutline from "../../assets/icons/pngwing.com (72).png";
import burger from "../../assets/burger6.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {Link} from "react-router-dom";

export default function BurgerPage() {
    const burgers = useSelector(state => state.burgers.data)
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

    const style = {
    cursor: "pointer"
    }
    return (
        <div className={styles.burger_container + " " + "container"}>
            <div className={styles.return_block}>
                <Link to="/">
                    <IoIosArrowBack style={style} />
                </Link>

                <img className={styles.heart_image} src={heartOutline} alt="hear outline icon"></img>
            </div>

            <div className={styles.image_block}>
                <img className={styles.burger_image} src={burger} alt="burger"></img>
            </div>

            <div className={styles.burger_description_block}>
              <h3>{burgers[activeBurgerId].title}</h3>
                <p>{burgers[activeBurgerId].calories}</p>
                <p>{burgers[activeBurgerId].description}</p>
                <p>Склад: {burgers[activeBurgerId].composition.join(',')}</p>
            </div>

            <div className={styles.quantity_block}>
              <span>Quantity</span>
                <div className={styles.values_block}>
                    <AiOutlineMinus/>
                    <span className={styles.value}>1</span>
                    <AiOutlinePlus/>
                </div>

            </div>

            <div className={styles.button_block}>
               <button className={styles.customize}>Customize</button>
                <button className={styles.add}>Add to Cart  <span className={styles.add_button_cost}>₴83.00</span></button>
            </div>

        </div>
    );
}

