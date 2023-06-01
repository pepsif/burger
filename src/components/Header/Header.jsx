import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = () => {
  
  return (
    <header>
      <div className="container header-container ">
        <FiMenu className="fit-menu ml-10"/>
        <span className="header-title">Home</span>
          <div className="user-card-block d-flex align-center mr-20">
          <Link to="cart">
             <BsCart4 className="header-cart mr-10"/>
          </Link>
             
              <VscAccount className="header-avatar"/>
          </div>

      </div>
    </header>
  );
};
