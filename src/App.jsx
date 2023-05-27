import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {AnonsmentBar} from "./components/AnonsmentBar/AnonsmentBar";
import {Header} from "./components/Header/Header";
import {Search} from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import BurgersContent from "./pages/BurgersContent/BurgersContent.jsx";
import BurgerPage from "./pages/Burger/BurgerPage.jsx";
import CustomBurger from "./components/CustomBurger/CustomBurger";

function App() {
    return (

    <Router>
        <Routes>
             <Route path="/" element={
                 <>
                     <Header />
                     <AnonsmentBar/>
                     <Search/>
                     <Sort/>
                     <BurgersContent/>
                     <CustomBurger/>
                 </>
             }/>
            <Route path="burger" element={ <BurgerPage/> }/>

        </Routes>
    </Router>
    )
}

export default App;
