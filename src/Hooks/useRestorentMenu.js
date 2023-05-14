import {useState,useEffect} from "react";
import {FETCH_MENU_URL} from "../util/constants";
const useRestorentMenu = (resData) =>{
    
    const [restorentMenu,setRestorentMenu] = useState("");

    useEffect(()=>{
        fetchRestorentMenu();
    },[])
 
    async function fetchRestorentMenu(){
        let data = await fetch(FETCH_MENU_URL+ resData) ;
        let json = await data.json();
        setRestorentMenu(json?.data?.cards[0]);
    }

    return restorentMenu;
}

export default useRestorentMenu;