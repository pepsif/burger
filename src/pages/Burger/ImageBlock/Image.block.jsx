import './ImageBlock.css';
import { useSelector } from "react-redux";

export default function ImageBlock() {
    const burgers = useSelector(state => state.burgers.data)
    // const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);
    const localBurgerId = JSON.parse(localStorage.getItem('burgerId'));
    const localBurger = JSON.parse(localStorage.getItem('burgersArray'))[localBurgerId]

    const style = {
        image_block: {
         height: "100%",
         background: localBurger.gradient,
     },
     cursor: "pointer",
     color: "white",
     }

    return(
        <div style={style.image_block} >
                <img className="burger_image" src={localBurger.imageUrl} alt="burger"/>
            </div>
    )
}