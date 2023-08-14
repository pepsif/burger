import styles from "./Search.module.scss";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <section className={styles.search}>
      <div className={ "container"+" "+ styles.search_container}>
        <input className={styles.input} placeholder="Search"></input>

        <button className={styles.button }><FaSearch/></button>
      </div>
    </section>
  );
};
