import styles from "./Menu.module.scss";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <KeyboardReturnIcon className={styles.return_button}/>

      <div className={"container" + " " + styles.menu_container}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>Трішки про нас</li>
          <li className={styles.menu_item}>Контакти</li>
          <li className={styles.menu_item}>Партнерство</li>
          <li className={styles.menu_item}>Як нас знайти</li>
        </ul>
      </div>
    </div>
  );
};
