import "./App.css";
import { AnonsmentBar } from "./components/AnonsmentBar/AnonsmentBar";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import BurgerContent from "./pages/BurgerContent/BurgerContent";

function App() {
  return (
    <>
     <Header/>
     <AnonsmentBar/>
     <Search/>
     <Sort/>
     <BurgerContent/>      
    </>
  )
}

export default App;
