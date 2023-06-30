import "./CartTotalSumBlock.scss";
import { useSelector } from "react-redux";

export default function CartTotalSumBlock() {
  const burgers = useSelector((state) => state.burgers.data);
  const arrFilteredBurgers = burgers.filter((el) => el.value > 0);
  const reduced =
    arrFilteredBurgers.length > 0
      ? arrFilteredBurgers.reduce((acum, el) => {
          return (acum += el.price * el.value);
        }, 0)
      : null;

  return (
    <div className="total-sum-block">
      <span>Загальна Сумма:</span>
      <span className="total-sum-price">₴ {reduced}</span>
    </div>
  );
}
