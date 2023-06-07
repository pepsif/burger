import './Sort.css'

export default function Sort() {
    return(
        <section className="sort-section">
           <div className="container sort-container d-flex justify-between">
            <span className="sort-title">Гамбургери</span>
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