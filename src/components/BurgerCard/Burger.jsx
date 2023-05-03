import React from 'react'
import "./Burger.css";
import { SlStar } from "react-icons/sl";
import { TiStar} from "react-icons/ti";
export default function Burger({ title, rating, price, background, imageUrl }) {
  const style = {
    backgroundColor: background,
    star: {
      color: "#f7bd44",
      width:16,
      height:16,
     
    },
  };
  return (
    <div className="burger-card" style={style}>
      <div className="rating-block"> 
        <TiStar style={style.star}/>
        <span>{rating}</span> 
        
      </div>
      <div className="description-block">
       <div className='burger-title-block'>
         {title} <br></br>
          <span className='burger-price'>₴ {price}</span>
       </div>
       <div className='burger-heart'>

       </div>
        
      </div>
    </div>
  );
}
