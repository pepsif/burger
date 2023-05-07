import "./Burger.css";
import { TiStar } from "react-icons/ti";
import heart from "../../assets/icons/PikPng.com_restart-icon-png_3823370.png";
import heartOutline from "../../assets/icons/pngwing.com (72).png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Burger({ title, rating, price, background, imageUrl }) {
  const style = {
    backgroundColor: background,
    star: {
      color: "#f7bd44",
      width: 16,
      height: 16,
    },
    buttons: {
      borderRadius: "50%",
      backgroundColor: "#f3f3f3",
      padding: "2px",
      cursor: "pointer",
    },
  };
  return (
    <div className="burger-card" style={style}>
      <img className="burger-image" src={imageUrl}></img>
      <div className="rating-block">
        <TiStar style={style.star} />
        <span>{rating}</span>
      </div>
      <div className="burger-heart">
        <img className="burger-heart" src={heartOutline}></img>
      </div>
      <div className="description-block d-flex align-center">
        <div className="burger-title-block">
          {title} <br></br>
          <span className="burger-price">₴ {price}</span>
        </div>

        <div className="burger-counter-block">
          <AiOutlineMinus style={style.buttons} />
          <span className="burger-count">0</span>
          <AiOutlinePlus style={style.buttons} />
        </div>
      </div>
    </div>
  );
}
