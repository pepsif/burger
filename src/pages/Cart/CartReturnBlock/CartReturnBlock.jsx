import { Link } from 'react-router-dom';
import './CartReturnBlock.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function CartReturnBlock() {
    return(
        <div className='return-block'>
        <Link to="/">
            <NavigateBeforeIcon className='return-icon'/>
        </Link>
           
           <span className='cart-title'>Кошик</span>
        </div>
    )
}