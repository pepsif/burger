import './Sort.css'

export default function Sort() {
    return(
        <section className="sort-section">
           <div className="container d-flex justify-between">
            <span className="sort-title">Near you now</span>
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