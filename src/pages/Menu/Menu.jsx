import styles from "./Menu.module.scss";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useDispatch } from "react-redux";
import { setOnOff } from "../../redux/MenuOnOffSlice/MenuOnOffSlice";
import { Link } from "react-router-dom";

export const Menu = () => {
  const dispatch = useDispatch();

  const resetMenuOn = () => {
    dispatch(setOnOff(false));
  };
  return (
    <div className={styles.menu}>
      <div className={"container" + " " + styles.menu_container}>
        <KeyboardReturnIcon
          className={styles.return_button}
          onClick={() => resetMenuOn()}
        />

        <ul className={styles.menu_list}>
          <Link to="/">
            <li className={styles.menu_item}>Головна</li>
          </Link>

          <Link to="about">
            <li className={styles.menu_item}>Трішки про нас</li>
          </Link>

          <li className={styles.menu_item}>Контакти</li>
          <li className={styles.menu_item}>Партнерство</li>
          <li className={styles.menu_item}>Як нас знайти</li>
        </ul>
      </div>
    </div>
  );
};
