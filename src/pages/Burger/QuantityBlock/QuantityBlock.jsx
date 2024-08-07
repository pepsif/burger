import styles from "./QuantityBlock.module.css";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useSelector} from "react-redux";

export default function QuantityBlock(){
    const burgers = useSelector(state => state.burgers.data)
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);
    const localBurgerId = JSON.parse(localStorage.getItem('burgerId'));
    const localBurger = JSON.parse(localStorage.getItem('burgersArray'))[localBurgerId]

    const style = {
        image_block: {
            height: "100%",
            // background: burgers[activeBurgerId].background,
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

    return(
        <div className={styles.quantity_block}>
            <span className={styles.quantity}>Кількість у Кошику</span>
            <div className={styles.values_block}>
                <AiOutlineMinus style={style.quantity.minus}/>
                <span className={styles.value}>{localBurger.value}</span>
                <AiOutlinePlus style={style.quantity.plus}/>
            </div>

        </div>
    )
}