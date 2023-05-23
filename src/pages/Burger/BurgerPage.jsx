import styles from './BurgerPage.module.css';

import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import heart from "../../assets/icons/PikPng.com_restart-icon-png_3823370.png";
import heartOutline from "../../assets/icons/pngegg.png";
import burger from "../../assets/burger2.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {Link} from "react-router-dom";

export default function BurgerPage() {
    const burgers = useSelector(state => state.burgers.data)
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

    // console.log(burgers[activeBurgerId].background)
    const style = {
    return_block: {
        background: burgers[activeBurgerId].background,
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
    },
    image_block: {
        height: "100%",
        background: burgers[activeBurgerId].background,
    },
    cursor: "pointer",
    color: "white",
        quantity: {
        minus: {
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
            padding: "4px"
        },
        plus: {
            backgroundColor: "#f5f5f5",
            borderRadius: "50%",
            padding: "4px"
        }
        }
    }

    // console.log( burger,burgers[activeBurgerId].imageForBurgerPage)
    return (
        <div className={styles.burger_container + " " + "container"}>
            <div style={style.return_block}>
                <Link to="/">
                    <IoIosArrowBack style={style} />
                </Link>

                <img className={styles.heart_image} src={heartOutline} alt="hear outline icon"></img>
            </div>

            <div style={style.image_block}>
                <img className={styles.burger_image} src={burgers[activeBurgerId].imageUrl} alt="burger"/>
            </div>

            <div className={styles.burger_description_block}>
              <h3 className={styles.burger_title}>{burgers[activeBurgerId].title}</h3>
                <p className={styles.burger_calories}>{burgers[activeBurgerId].calories}</p>
                <p className={styles.burger_description}>{burgers[activeBurgerId].description}</p>
                {/*<p>Склад: {burgers[activeBurgerId].composition.join(',')}</p>*/}
            </div>

            <div className={styles.quantity_block}>
              <span className={styles.quantity}>Кількість</span>
                <div className={styles.values_block}>
                    <AiOutlineMinus style={style.quantity.minus}/>
                    <span className={styles.value}>1</span>
                    <AiOutlinePlus style={style.quantity.plus}/>
                </div>

            </div>

            <div className={styles.button_block}>
               <button className={styles.customize}>Customize</button>
                <button className={styles.add}>Add to Cart  <span className={styles.add_button_cost}>₴00.00</span></button>
            </div>

        </div>
    );
}

