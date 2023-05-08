import styles from './BurgerPage.module.css';

import { IoIosArrowBack } from "react-icons/io";
import heart from "../../assets/icons/PikPng.com_restart-icon-png_3823370.png";
import heartOutline from "../../assets/icons/pngwing.com (72).png";
import burger from "../../assets/burger6.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function BurgerPage() {
    return (
        <div className={styles.burger_container + " " + "container"}>
            <div className={styles.return_block}>
                <IoIosArrowBack/>
                <img className={styles.heart_image} src={heartOutline}></img>
            </div>

            <div className={styles.image_block}>
                <img className={styles.burger_image} src={burger}></img>
            </div>

            <div className={styles.burger_description_block}>
              <h3>burger title</h3>
                <p>Calories: 344 kcal</p>
                <p>burger info ffffffffffgfgfgfg  sdfdfdfd cvvvvvvvvvvv jkjkjkjk jkgfgfg dfdfdff</p>
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
               <button>Customize</button>
                <button>Add to Cart  <span>₴83.00</span></button>
            </div>

        </div>
    );
}

