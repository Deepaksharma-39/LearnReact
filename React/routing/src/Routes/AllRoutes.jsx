import {Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./Contactpage";
import UserPage from "./UserPage";
import SinglePageUser from "./SingleUserPage";


function AllRoutes(){
    return(
        <div>
        <Routes>
            < Route path="/" element={<HomePage/>}/>
            < Route path="/about" element={<AboutPage/>}/>
            < Route path="/contact" element={<ContactPage/>}/>
            < Route path="/user" element={<UserPage/>}/>
            < Route path="/users/:id" element={<SinglePageUser/>}/>
        </Routes>
        </div>
    )
}

export default AllRoutes;