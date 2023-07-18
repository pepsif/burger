import "./BurgersContent.css";
import { useSelector } from "react-redux";
import Burger from "../../components/BurgerCard/Burger.jsx";


import { useEffect } from "react";


export default function BurgersContent() {
  const burgers = useSelector((state) => state.burgers.data);



   return (
    <section className="burger-section">
      <div className="container burgers-container">
        <div className="burgers-cards">
          
   

                    
          {burgers.map((el, i) => {
           
           return <Burger {...burgers[i]} key={i}/>
           
          })}
        </div>
      </div>
    </section>
  );
}
