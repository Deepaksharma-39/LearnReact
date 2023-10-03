import {Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./Contactpage";

function AllRoutes(){
    return(
        <div>
        <Routes>
            < Route path="/" element={<HomePage/>}/>
            < Route path="/about" element={<AboutPage/>}/>
            < Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        </div>
    )
}

export default AllRoutes;