import './CartReturnBlock.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function CartReturnBlock() {
    return(
        <div className='return-block'>
           <NavigateBeforeIcon className='return-icon'/>
           <span className='cart-title'>Корзина</span>
        </div>
    )
}