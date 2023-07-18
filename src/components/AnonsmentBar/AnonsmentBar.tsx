import "./Anonsment.css";
import React from "react";


export const AnonsmentBar:React.FC = () => {
  return (
    <section className="anonsment">
      <div className="container anonsment-container d-flex">
      <p className="anonsment-text">Сьогодні при замовленні з 11-00 до 12-30 діють знижки на всю продукцію 20%</p>
      </div>
    </section>
  );
};
