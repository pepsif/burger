import "./CustomBurgerPopup.css";
import "animate.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import burger from "../../assets/icons/burger_custom2.png";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import burger2 from "../../assets/images/custom_burger.gif";
import courier from "../../assets/icons/scooter-courier.gif";

export default function CustomBurgerPopup() {
  return (
    <div className="delivery-section">
    <Link to="delivery" alt="delivery button">
       <div className="delivery-burger-container">
       
        <div className="courier-block">
          <img className="courier-image" src={courier}></img>
          <LunchDiningOutlinedIcon className="custom-burger-image animate__animated animate__pulse animate__infinite" />
          <LunchDiningOutlinedIcon className="custom-burger-image animate__animated animate__headShake animate__infinite animate__slower" />
          <LunchDiningOutlinedIcon className="custom-burger-image animate__animated animate__pulse animate__infinite animate__slow" />
        </div>

        {/* <img className="custom-burger-image" src={burger2}></img> */}
        <p className="delivery-button-slogan">Замовити Доставку!!!</p>
      </div>
    </Link>
     
    </div>
  );
}

{/* <Link to="burger" style={style.link} onClick={()=> dispatch(setActiveBurgerId(id))}>
      <img className="burger-image" src= { imageUrl } alt="burger"></img>
        </Link> */}