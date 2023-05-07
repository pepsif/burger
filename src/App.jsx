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

function App() {
    return (
        <>


                <Header/>
                <AnonsmentBar/>
                <Search/>
                <Sort/>
                <BurgersContent/>

    <Router>
        <Routes>
            <Route path="header" element={<Header/>}/>
            <Route path="anonsment" element={<AnonsmentBar/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="sort" element={<Sort/>}/>
            <Route path="burgers" element={<BurgersContent/>}/>

        </Routes>

    </Router>




        </>
    )
}

export default App;
