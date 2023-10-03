import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";


function ToggleComponent(){

    const getStyle=(theme)=>
        theme==="dark" ? ({
            color:"white",
            background : "black"
        }) :
        ({
            color :"black",
            background:"white"
        });
    const context= useContext(AppContext);
    const {toggleTheme,theme}=context;

    const style=getStyle(theme);
    return(
        <button style={style} onClick={toggleTheme}>
            Toggle
        </button>
    )
}

export default ToggleComponent;