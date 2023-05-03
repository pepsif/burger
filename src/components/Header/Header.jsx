import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

export const Header = () => {
  return (
    <header>
      <div className="container d-flex justify-between align-center p-10">
        <FiMenu />
        <span className="header-title">Home</span>
        <VscAccount />
      </div>
    </header>
  );
};
