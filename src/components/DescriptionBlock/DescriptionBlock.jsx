import './DescriptionBlock.scss';
import {useSelector} from "react-redux";

export default function DescriptionBlock() {
    // const burgers = useSelector((state) => state.burgers.data);
    // const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

    const localBurgerId = JSON.parse(localStorage.getItem('burgerId'));
    const localBurger = JSON.parse(localStorage.getItem('burgersArray'))[localBurgerId]

    return (
        <>
            <div className="burger_description_block">
                <h3 className="burger_title">{localBurger.title}</h3>
                <p>{localBurger.info}</p>
                <p className="burger_calories">
                    {localBurger.calories}
                </p>
                <p className="burger_description">
                    <span style={{fontWeight: "bold"}}>Склад:</span> {localBurger.compound.join(',')}
                </p>
            </div>
        </>

    )
}