import './DescriptionBlock.scss';
import {useSelector} from "react-redux";

export default function DescriptionBlock() {
    const burgers = useSelector((state) => state.burgers.data);
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

    return (
        <>
            <div className="burger_description_block">
                <h3 className="burger_title">{burgers[activeBurgerId].title}</h3>
                <p>{burgers[activeBurgerId].info}</p>
                <p className="burger_calories">
                    {burgers[activeBurgerId].calories}
                </p>
                <p className="burger_description">
                    <span style={{fontWeight: "bold"}}>Склад:</span> {burgers[activeBurgerId].compound.join(',')}
                </p>
            </div>
        </>

    )
}