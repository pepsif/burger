import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnonsmentBar } from "./components/AnonsmentBar/AnonsmentBar";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import BurgersContent from "./pages/BurgersContent/BurgersContent.jsx";
import BurgerPage from "./pages/Burger/BurgerPage.jsx";
import CustomBurgerPopup from "./components/CustomBurger/CustomBurgerPopup.jsx";
import Cart from "./pages/Cart/Cart";

import Parse from 'parse/dist/parse.min.js';

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
              <Header />

              <AnonsmentBar />
              <Search />
              <Sort />
              <BurgersContent />
              <CustomBurgerPopup />
            </>
          }
        />
        <Route path="burger" element={<BurgerPage />} />
        <Route path="cart" element={ <Cart/> }/>
      </Routes>
    </Router>
  );
}

export default App;
