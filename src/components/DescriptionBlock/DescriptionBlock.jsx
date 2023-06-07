import './DescriptionBlock.scss';
import { useSelector } from "react-redux";

export default function DescriptionBlock() {
    const burgers = useSelector((state) => state.burgers.data);
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

    return(
        <>
               <div className="burger_description_block">
        <h3 className="burger_title">{burgers[activeBurgerId].title}</h3>
        <p className="burger_calories">
          {burgers[activeBurgerId].calories}
        </p>
        <p className="burger_description">
          {burgers[activeBurgerId].description}
        </p>
        {/*<p>Склад: {burgers[activeBurgerId].composition.join(',')}</p>*/}
      </div>
        </>
     
    )
}