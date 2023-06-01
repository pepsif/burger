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
            // background: burgers[activeBurgerId].background,
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            
            // borderRadius: "10% 10% 0% 0% / 49% 49% 10% 10%",
            // marginTop: "-20px"
        }
    }
    return(
        <div style={style.return_block}>
            <Link to="/">
                <IoIosArrowBack />
            </Link>

            <img className="heart_image" src={heartOutline} alt="hear outline icon"></img>
        </div>
    )
}