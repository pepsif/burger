import { Link } from 'react-router-dom';
import styles from './CartReturnBlock.module.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function CartReturnBlock() {
    return(
        <div className={styles.return_block}>
        <Link to="/">
            <NavigateBeforeIcon className={styles.return_icon}/>
        </Link>
           
           <span className={styles.cart_title}>Кошик</span>
        </div>
    )
}