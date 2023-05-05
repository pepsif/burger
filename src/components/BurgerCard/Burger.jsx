import "./Burger.css";
import { TiStar} from "react-icons/ti";
import  heart  from '../../assets/icons/PikPng.com_restart-icon-png_3823370.png'
import  heartOutline  from '../../assets/icons/pngwing.com (72).png'


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
      <img className="burger-image" src={imageUrl}></img>
        <div className="rating-block"> 
        <TiStar style={style.star}/>
        <span>{rating}</span> 
        
      </div>
      <div className="description-block d-flex align-center">
       <div className='burger-title-block'>
         {title} <br></br>
          <span className='burger-price'>₴ {price}</span>
       </div>
       <div className='burger-heart'>
           <img className="burger-heart" src={heartOutline}></img>
       </div>
        
      </div>
    </div>
  );
}
