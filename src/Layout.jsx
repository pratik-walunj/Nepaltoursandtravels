import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import Whatsapp from "./pages/Whatsapp"

const Layout=()=>{
    return(<>
    <Navbar/>
    
    <Outlet/>
    
    <Footer/>
    <Whatsapp/>
    <AIChatbot/>
    </>)
}


export default Layout;