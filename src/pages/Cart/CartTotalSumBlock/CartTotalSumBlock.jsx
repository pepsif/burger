import './CartTotalSumBlock.scss'

export default function CartTotalSumBlock() {
    return(
        <div className='total-sum-block'>
          <span>Загальна Сумма:</span>
          <span className='total-sum-price'>₴ 20</span>
        </div>
    )
}