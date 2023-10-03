import React, {useState} from "react";

export const AppContext=React.createContext();
const {Provider} =AppContext;

export default function ApplicationContextProvider(props){

    const [theme,setTheme]= useState("dark");

    const toggleTheme=()=>{
        setTheme(theme==="dark" ? "light" : "dark");
    }
    return(
        <Provider value={{theme:theme,toggleTheme:toggleTheme}}>
            {props.children}
        </Provider>
    )
}