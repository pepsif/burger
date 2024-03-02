import './ImageBlock.css';
import { useSelector } from "react-redux";

export default function ImageBlock() {
    const burgers = useSelector(state => state.burgers.data)
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);


    const style = {
        image_block: {
         height: "100%",
         background: burgers[activeBurgerId].gradient,
     },
     cursor: "pointer",
     color: "white",
     }

    return(
        <div style={style.image_block} >
                <img className="burger_image" src={burgers[activeBurgerId].imageUrl} alt="burger"/>
            </div>
    )
}