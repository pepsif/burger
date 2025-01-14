import {Header} from "../../components/Header/Header.jsx";
import {AnonsmentBar} from "../../components/AnonsmentBar/AnonsmentBar.tsx";
import {Menu} from "../Menu/Menu.jsx";
import {useSelector} from "react-redux";
import { AboutContent } from "./AboutContent.jsx";


export const About = () => {
    const menuOn = useSelector(state => state.menuOnOff.menuOn);

    return (
        <>
            <Header/>
            
            {/* <AnonsmentBar/> */}
            {menuOn && <Menu/>}
            <AboutContent />
        </>
    )
}