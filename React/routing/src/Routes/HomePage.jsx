import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function HomePage(){
    const {isAuth,toggle}= useContext(AuthContext)

    if(isAuth){
        return (
            <div>
            <h1>
                Home Page
            </h1>
            <button onClick={toggle}>
                Logout
            </button>
            
        </div>
        
        )
    }
    return(
        <div>
            <h1>
                Home Page
            </h1>
            <button onClick={toggle}>
                Login
            </button>
            
        </div>
    )
}

export default HomePage;