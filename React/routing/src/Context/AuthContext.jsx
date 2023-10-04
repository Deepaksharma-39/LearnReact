
export const AuthContext=React.createContext();

function AuthContextProvider({children}){
    const [isAuth,setAuth]= useState(false);
    const toggle=()=>{
        setAuth(!isAuth);

    }

    return(
        <AuthContext.Provider value={{isAuth,toggle}}>
{children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;