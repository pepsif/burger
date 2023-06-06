import "./CustomBurgerPopup.css";
import Button from "@mui/material/Button";
import burger from "../../assets/icons/burger_custom2.png";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import burger2 from '../../assets/images/custom_burger.gif'

export default function CustomBurgerPopup() {
  return (
    <div className="customize-section">
      <div className="customize-burger-container">
        <p>Зробити Бургер</p>
        <LunchDiningOutlinedIcon className="custom-burger-image" />
         {/* <img className="custom-burger-image" src={burger2}></img> */}
        <p>САМОМУ !!!</p>
      </div>
    </div>
  );
}
