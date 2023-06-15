import './CartTotalSumBlock.scss';
import { useSelector } from "react-redux";

export default function CartTotalSumBlock() {
  const burgers = useSelector(state => state.burgers.data);
  const result = burgers.filter(el => el.value > 0);

   //TODO зробити прохід редьюсом value * price

    return(
        <div className='total-sum-block'>
          <span>Загальна Сумма:</span>
          <span className='total-sum-price'>{ console.log(result) }</span>
        </div>
    )
}