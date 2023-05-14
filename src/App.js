import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Restorents from "./components/Restorents";
import Profile from "./components/Profile";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./util/UserContext";
import {Provider} from "react-redux"
import store from "./util/store";
import Cart from "./components/Cart"
// import Instamart from "./components/Instamart";

const Instamart = lazy(()=> import("./components/Instamart"));

/** 
* Header
*   - LOGO
*   - Nav Items
* Body
*   - Search
*   - RestronentContainer
        - RestorentCard
            - Img
            - Name of Res, Star Rating , cusine, delery tie
*
*   Footer
    - Copyright
    - Links 
    - Address
    - Contact
**/



// const styleCard = {
//     backgroundColor :"#f0f0f0"
// };

const AppLayout = () => {

    const [user,setUser] = useState({
        name:"Akib Hobale",
        email:"abc1234@gmail.com"
    });

    return ( 

    <Provider store={store}> 
        <UserContext.Provider value={{user:user,setUser:setUser}}>
        
                <Header/>
                <Outlet/>
                <Footer/>
        
        </UserContext.Provider>
    </Provider>
    );
}


const appLayout = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:'profile',
                    element:<Profile/>
                },
            ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restorents/:id",
                element:<Restorents/>
            },{
                path:"/instamart",
                element:<Suspense fallback={<h1>Loading........</h1>}><Instamart/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
            
        ]
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout}/>);