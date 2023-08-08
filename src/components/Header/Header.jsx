import "./Header.scss";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";

export const Header = () => {
  // const dispatch = useDispatch();
  // const burgersCount = useSelector( state => state.burgers.data)

  return (
    <header>
      <div className="container header-container ">
        <FiMenu className="fit-menu ml-10"/>
        <span className="header-title">Home</span>
          <div className="user-card-block d-flex align-center mr-20">
          <Link to="cart">
          <div className="cart-block">
            <BsCart4 className="header-cart mr-10"/>
             { (localStorage.getItem('cart')) ? <span className="burgers-count">{JSON.parse(localStorage.getItem('cart')).length}</span> : '' }
          </div>
             
          </Link>
             
              <VscAccount className="header-avatar"/>
          </div>

      </div>
    </header>
  );
};
