import {useEffect, useState} from "react";
import {FETCH_RESTORENT_URL} from "../util/constants";

const useRestorentList = () =>{

    const [listOfRestorent,setListofRestorent] = useState("");

    useEffect(()=>{
            fetchData();
        },[]);
 
    async function fetchData(){
        const data = await fetch(FETCH_RESTORENT_URL)
        const json = await data.json();
        setListofRestorent(json?.data?.cards[2]?.data?.data?.cards);    
    }
    return [listOfRestorent,setListofRestorent];

}

export default useRestorentList;