import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";


export const Header = () => {

  
  return (
    <header>
      <div className="container d-flex justify-between align-center p-10">
        <FiMenu />
        <span className="header-title">Home</span>
          <div className="user-card-block d-flex align-center">
              <BsCart4 className="header-cart mr-10"/>
              <VscAccount className="header-avatar"/>
          </div>

      </div>
    </header>
  );
};
