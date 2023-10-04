import {Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./Contactpage";
import UserPage from "./UserPage";
import SinglePageUser from "./SingleUserPage";
import PrivateRoute from "../Components/PrivateRoute";


function AllRoutes(){
    return(
        <div>
        <Routes>
            < Route path="/" element={<HomePage/>}/>
            < Route path="/about" element={<AboutPage/>}/>
            < Route path="/contact" element={<ContactPage/>}/>
            < Route path="/user" element={<PrivateRoute><UserPage/></PrivateRoute>}/>
            < Route path="/users/:id" element={<PrivateRoute><SinglePageUser/></PrivateRoute>}/>
        </Routes>
        </div>
    )
}

export default AllRoutes;