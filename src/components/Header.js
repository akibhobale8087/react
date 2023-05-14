import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../util/constants";
import useOnline from "../Hooks/useOnline";
import UserContext from "../util/UserContext";
import {useSelector} from "react-redux";
 
const Header = () =>{
    
    const [isLoggedIn, setLoggedIn] = useState(false); 
    const isOnline = useOnline();   

    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);


    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="h-26 p-2">
                <img className="logo h-20" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"><Link to ="/">Home</Link></li>
                    <li className="px-2"><Link to ="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact US</Link></li>
                    <li className="px-2"><Link to="/cart">Cart  {cartItems.length !==0 ? "-" + cartItems.length:null}</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                  
                </ul>
            </div>
            <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
            {user.name}
            {
                isLoggedIn?(<button onClick={()=> setLoggedIn(false)}>Logout</button>)
                :(<button onClick={()=> setLoggedIn(true)}>Login</button>)
            }
        </div>
    );
};


export default Header;