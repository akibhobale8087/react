import {useContext} from "react";
import UserContext from "../util/UserContext";
 
const Footer= () =>{

    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Footer Content</h1>
            <h1>{user.name} - {user.email}</h1>
        </div>
    )
}

export default Footer;