import "./BurgerContent.css";
import { useSelector, useDispatch } from "react-redux";
import Burger from "../../components/BurgerCard/Burger";

export default function BurgerContent() {
  const burgers = useSelector((state) => state.burgers.data);
  const dispatch = useDispatch();

  console.log(burgers);

  return (
    <section className="burger-section">
      <div className="container burgers-container">
        <div className="burgers-cards">
          {burgers.map((el, i) => {
           return <Burger key={i}/>
           
          })}
        </div>
      </div>
    </section>
  );
}
