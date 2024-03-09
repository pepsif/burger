import "./CartItem.scss";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch} from "react-redux";
import {burgersCartCountIncrease, burgersCartCountDecrease} from '../../../redux/CartSlice/CartSlice'
import {increaseBurgerValue, decreaseBurgerValue, deleteBurger} from '../../../redux/BurgersSlice/BurgersSlice';
import {deleteBurgerCartCountReset} from "../../../redux/CartSlice/CartSlice";


export default function CartItem({id, title, value, price, imageUrl}) {

    const dispatch = useDispatch();

    const increaseBurger = () => {
        dispatch(increaseBurgerValue(id))
        dispatch(burgersCartCountIncrease())
    }
    const decreaseBurger = () => {
        dispatch(decreaseBurgerValue(id))
        dispatch(burgersCartCountDecrease())
    }
    const deletedBurger = () => {
        dispatch(deleteBurger(id))
        dispatch(deleteBurgerCartCountReset(value))

    }


    return (
        <div className="cart-item">
            <div className="product-image-block"><img className="product-img" src={imageUrl}></img></div>
            <div className="price-block">
                <p className="product-title">{title}</p>
                <div className="quantity-block">
                    <RemoveIcon className="quantity-button" fontSize="small" onClick={() => decreaseBurger()}/>
                    <span className="quantity-value">{value}</span>
                    <AddIcon className="quantity-button" fontSize="small" onClick={() => increaseBurger()}/>

                </div>
            </div>
            <div className="price-product-block">
                <span className="total-value">₴ {price * value}</span>
                <DeleteOutlineIcon className="delete-icon" onClick={() => deletedBurger()}/>
            </div>

        </div>
    );
}
