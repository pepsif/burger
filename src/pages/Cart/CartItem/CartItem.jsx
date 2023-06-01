import "./CartItem.css";
import burger from '../../../assets/burger1.png'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function CartItem() {
   


  return (
    <div className="cart-item">
      <div className="product-image-block"><img className="product-img" src={burger}></img></div>
      <div className="price-block">
        <p className="product-title">Мексиканський</p>
        <div className="quantity-block">
          <RemoveIcon className="quantity-button" fontSize="small"/>
          <span className="quantity-value">1</span>
          <AddIcon className="quantity-button" fontSize="small"/>

        </div>
      </div>
      <span className="total-value">₴ 10</span>


    </div>
  );
}
