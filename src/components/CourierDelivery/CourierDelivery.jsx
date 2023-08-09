import styles from "./CourierDelivery.module.css";
import "animate.css";
import { Link } from "react-router-dom";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import courier from "../../assets/icons/scooter-courier.gif";

export default function CourierDelivery() {
  return (
    <div className={styles.CourierDeliverySection}>
        <div className={"container" + " "+ styles.deliveryCourierContainer}>
            <Link className={styles.deliveryLink} to="delivery" alt="delivery button">


                    <div className={styles.courierBlock}>
                        <img className={styles.courierImage} src={courier}></img>
                        <LunchDiningOutlinedIcon className={styles.customBurgerImage + " "+ "animate__animated animate__pulse animate__infinite"} />
                        <LunchDiningOutlinedIcon className={styles.customBurgerImage + " "+ " animate__animated animate__headShake animate__infinite animate__slower"} />
                        <LunchDiningOutlinedIcon className={styles.customBurgerImage + " "+ "animate__animated animate__pulse animate__infinite animate__slow"} />
                    </div>


                    <p className={styles.deliveryButtonSlogan}>Замовити Доставку!!!</p>

            </Link>
        </div>

     
    </div>
  );
}
