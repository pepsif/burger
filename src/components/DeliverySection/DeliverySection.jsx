import "./DeliverySection.css";
import "animate.css";
import { Link } from "react-router-dom";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import courier from "../../assets/icons/scooter-courier.gif";

export default function DeliverySection() {
  return (
    <div className="delivery-section">
    <Link className="delivery-link" to="delivery" alt="delivery button">
       <div className="delivery-burger-container">
       
        <div className="courier-block">
          <img className="courier-image" src={courier}></img>
          <LunchDiningOutlinedIcon className="custom-burger-image animate__animated animate__pulse animate__infinite" />
          <LunchDiningOutlinedIcon className="custom-burger-image animate__animated animate__headShake animate__infinite animate__slower" />
          <LunchDiningOutlinedIcon className="custom-burger-image animate__animated animate__pulse animate__infinite animate__slow" />
        </div>


        <p className="delivery-button-slogan">Замовити Доставку!!!</p>
      </div>
    </Link>
     
    </div>
  );
}
