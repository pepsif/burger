import styles from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOnOff } from "../../redux/MenuOnOffSlice/MenuOnOffSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const menuOn = useSelector((state) => state.menuOnOff.menuOn);
  const burgersCounter = useSelector(state => state.burgers.burgersCount)

  const menuOnOff = () => {
    dispatch(setOnOff(!menuOn));
  };
  
  return (
    <header className={styles.header}>
      <div className={"container" + " " + styles.header_container}>
        <FiMenu className={styles.fit_menu} onClick={() => menuOnOff()} />
        <span className={styles.header_title}>Home</span>

        <div className={styles.user_cart_block}>
          <Link to="cart">
            <div className={styles.cart_block}>
              <BsCart4 className={styles.header_cart} />

                <span className={styles.burgers_count}>

                  { burgersCounter }

                </span>


            </div>
          </Link>
          <Link className={styles.user_avatar} to="/user-login">
            <VscAccount className={styles.header_avatar} />
          </Link>
        </div>
      </div>
    </header>
  );
};
