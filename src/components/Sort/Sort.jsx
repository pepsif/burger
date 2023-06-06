import './Sort.css'

export default function Sort() {
    return(
        <section className="sort-section">
           <div className="container sort-container d-flex justify-between">
            <span className="sort-title">Гамбургери</span>
            <select>
            <option>SEE ALL</option>
              <option>Low to High</option>
              <option>High to Low</option>
              <option>Ratings</option>
            </select>
           </div>
        </section>
    )
}