import "./CartItem.scss";
import burger from '../../../assets/burger1.png'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from "react-redux";
import { burgersCountIncrease, burgersCountDecrease } from '../../../redux/CartSlice/CartSlice'
import { increaseBurgerValue, decreaseBurgerValue, deleteBurger } from '../../../redux/BurgersSlice/BurgersSlice';



export default function CartItem( { id, title, value,  price, imageUrl  } ) {
   const dispatch = useDispatch();
   


const increaseBurger = () => {
  dispatch(increaseBurgerValue(id))
  dispatch(burgersCountIncrease())
}
const decreaseBurger = () => {
dispatch(decreaseBurgerValue(id))
dispatch(burgersCountDecrease())
}
const deletedBurger = () => {
dispatch(deleteBurger(id))
}


  return (
    <div className="cart-item">
      <div className="product-image-block"><img className="product-img" src={imageUrl}></img></div>
      <div className="price-block">
        <p className="product-title">{title}</p>
        <div className="quantity-block">
          <RemoveIcon className="quantity-button" fontSize="small" onClick={ ()=> decreaseBurger() }/>
          <span className="quantity-value">{value}</span>
          <AddIcon className="quantity-button" fontSize="small" onClick={ ()=> increaseBurger() }/>

        </div>
      </div>
      <div className="price-product-block">
        <span className="total-value">₴ {price * value }</span>
        <DeleteOutlineIcon className="delete-icon" onClick={ ()=> deletedBurger() }/>
      </div>
      
    </div>
  );
}
