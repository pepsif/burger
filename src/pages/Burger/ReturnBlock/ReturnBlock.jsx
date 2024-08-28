import styles from "./ReturnBlock.module.css";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

import heartOutline from "../../../assets/icons/pngegg.png";

export default function ReturnBlock() {

    return(
        <div className={styles.return_block }>
            <Link to="/" className={ styles.return_button } >
                <IoIosArrowBack />
            </Link>

            <img className={ styles.heart_image } src={ heartOutline } alt="heart icon"></img>
        </div>
    )
}