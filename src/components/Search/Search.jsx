import "./Search.css";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <section className="search">
      <div className="container d-flex justify-between">
        <input className="input" placeholder="Search"></input>
        <button className="button d-flex justify-center align-center"><FaSearch/></button>
      </div>
    </section>
  );
};
