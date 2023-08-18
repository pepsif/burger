import styles from "./Menu.module.scss";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useDispatch } from "react-redux";
import { setOnOff } from "../../redux/MenuOnOffSlice/MenuOnOffSlice";

export const Menu = () => {
  const dispatch = useDispatch()
  
 
  const resetMenuOn = () => {
  dispatch(setOnOff(false))

  }
  return (
    <div className={styles.menu}>
    
       <KeyboardReturnIcon className={styles.return_button} onClick={()=> resetMenuOn()}/>
    
     

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
