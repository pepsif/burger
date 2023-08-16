import styles from './Sort.module.scss'

export default function Sort() {
    return(
        <section className={styles.sort_section}>
           <div className={"container"+" "+ styles.sort_container }>
            <span className={styles.sort_title}>Гамбургери</span>
               <span className={styles.sort_title}>Кава</span>
               <span className={styles.sort_title}>Напої</span>
            <select>
            <option>Всі</option>
              <option>по Ціні: від меньшої до більшої</option>
              <option>по Ціні: від більшої до низької  </option>
              <option>по Рейтингу</option>
            </select>
           </div>
        </section>
    )
}