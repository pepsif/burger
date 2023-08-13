import { lazy, Suspense } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnonsmentBar } from "./components/AnonsmentBar/AnonsmentBar";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import BurgersContent from "./pages/BurgersContent/BurgersContent.jsx";
import BurgerPage from "./pages/Burger/BurgerPage.jsx";
import CourierDelivery from "./components/CourierDelivery/CourierDelivery.jsx";
import Cart from "./pages/Cart/Cart";
import DeliveryPage from './pages/Delivery/DeliveryPage';
 import {Menu} from './pages/Menu/Menu.tsx';
import {UserRegistration} from './pages/UserRegistration/UserRegistration'
import {UserLogin} from "./pages/UserLogin/UserLogin.jsx";

// const BurgerPage = lazy(()=> import("./pages/Burger/BurgerPage"))

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
              <CourierDelivery />
              <Menu/>
            </>
          }
        />
        <Route path="burger" element={<BurgerPage />} />
        <Route path="cart" element={ <Cart/> }/>
        <Route path="delivery" element={ <DeliveryPage/> }/>
        <Route path="user-registration" element={ <UserRegistration/> }/>
          <Route path="user-login" element={ <UserLogin/> }/>

      </Routes>
    </Router>
  );
}

export default App;
