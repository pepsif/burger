import "./ReturnBlock.css";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

import heartOutline from "../../../assets/icons/pngegg.png";
import {useSelector} from "react-redux";

export default function ReturnBlock() {
    const burgers = useSelector(state => state.burgers.data)
    const activeBurgerId = useSelector((state) => state.burgers.activeBurgerId);

    const style = {
        return_block: {
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
           
        }
    }
    return(
        <div className="return-block" style={style.return_block}>
            <Link to="/">
                <IoIosArrowBack />
            </Link>

            <img className="heart_image" src={heartOutline} alt="hear outline icon"></img>
        </div>
    )
}