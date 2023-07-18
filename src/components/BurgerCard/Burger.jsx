import "./Burger.css";

// import heart from "../../assets/icons/PikPng.com_restart-icon-png_3823370.png";
import heartOutline from "../../assets/icons/pngwing.com (72).png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TiStar } from "react-icons/ti";
import {Link } from "react-router-dom";

import {  useDispatch } from "react-redux";
import { setActiveBurgerId, increaseBurgerValue, decreaseBurgerValue } from "../../redux/BurgersSlice/BurgersSlice.ts";
import { burgersCountIncrease, burgersCountDecrease } from "../../redux/CartSlice/CartSlice"


// eslint-disable-next-line react/prop-types
export default function Burger({ id, value, title, rating, price, background, imageUrl }) {
    const dispatch = useDispatch();
    // const activeBurgerId = useSelector(state => state.burgers.activeBurgerId);

        const style = {
    background: background,

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
    link: {
        textDecoration: "none"
    }
  };
const burgerAdd = () => {
        dispatch(burgersCountIncrease())
       dispatch(increaseBurgerValue(id))
    
}
const burgerDecrease = () => {
   if(value === 0) return
    dispatch(burgersCountDecrease())
    dispatch(decreaseBurgerValue(id))
}
  return (

    <div className="burger-card" style={style}>
        <Link to="burger" style={style.link} onClick={()=> dispatch(setActiveBurgerId(id))}>
      <img className="burger-image" src= { imageUrl } alt="burger"></img>
        </Link>
      <div className="rating-block">
        <TiStar style={style.star} />
        <span>{rating}</span>
      </div>
      <div className="burger-heart">
        <img className="burger-heart" src={heartOutline} alt="heart icon"></img>
      </div>
      <div className="description-block d-flex align-center">
        <div className="burger-title-block">
          {title} <br></br>
          <span className="burger-price">₴ {price}</span>
        </div>

        <div className="burger-counter-block">
          <AiOutlineMinus style={style.buttons} onClick={()=>burgerDecrease()}/>
          <span className="burger-count">{ value }</span>
          <AiOutlinePlus style={style.buttons} onClick={(elem)=>burgerAdd(elem)}/>
        </div>
      </div>
    </div>

  );
}
