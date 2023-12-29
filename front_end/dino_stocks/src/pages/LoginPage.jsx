import LogIn from "../components/LogIn"
import { useOutletContext } from "react-router-dom";

const LoginPage = () =>{
    const { user, setUser } = useOutletContext()


    return(
        <>
        <h1>LoginPage</h1>
        <LogIn setUser={setUser}/>
        
        </>
    )
}

export default LoginPage