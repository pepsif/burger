import styles from "./Header.module.scss";
import {FiMenu} from "react-icons/fi";
import {VscAccount} from "react-icons/vsc";
import {BsCart4} from "react-icons/bs";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={"container" + " " + styles.header_container}>
                <FiMenu className={styles.fit_menu}/>
                <span className={styles.header_title}>Home</span>
                <div className={styles.user_cart_block}>
                    <Link to="cart">
                        <div className={styles.cart_block}>
                            <BsCart4 className={styles.header_cart}/>
                            {(localStorage.getItem('cart')) ? <span
                                className={styles.burgers_count}>{JSON.parse(localStorage.getItem('cart')).length}</span> : ''}
                        </div>

                    </Link>
                    <Link className={styles.user_avatar} to="/user-login">
                        <VscAccount className={styles.header_avatar}/>
                    </Link>

                </div>

            </div>
        </header>
    );
};
