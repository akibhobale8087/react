import RestorentCard from "./RestorentCard";
import {useState, useEffect,useContext} from "react";

import  resObj from "../util/mockData"; 
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {FETCH_RESTORENT_URL} from "../util/constants";
import useRestorentList from "../Hooks/useRestorentList";

import useOnline from "../Hooks/useOnline";
import UserContext from "../util/UserContext";


function filterData (searchText, resObj){    
    const filterData = resObj.filter((res)=> res?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}

const Body = () => {

    // const [listOfRestorent,setListofRestorent] = useState("");
    const [filterRestorent,setFilterRestorent] = useRestorentList();
    const [listOfRestorent,setListofRestorent] = useRestorentList();
   
    const [searchText,setSearchText] = useState("");
    const {user,setUser} = useContext(UserContext);    

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // async function fetchData(){
    //     const data = await fetch(FETCH_RESTORENT_URL)
    //     const json = await data.json();
    //     setListofRestorent(json?.data?.cards[2]?.data?.data?.cards);
    //     setFilterRestorent(json?.data?.cards[2]?.data?.data?.cards);
    // }
    

    // Custome Hook 
    const isOnline = useOnline();

    if(!isOnline) {
        return <h1> Offline, please check your intrnet connection!!</h1>
    }

    // Custome Hook End Here

    return listOfRestorent?.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <>
            <div className="search-container p-5 bg-pink-50 my-5">
                <input className="search" type="text" placeholder="search" value={searchText} onChange = {(e) => { setSearchText(e.target.value)}} />
                <button className="p-2 m-2 bg-purple-900 hover:bg-purple-950 text-white rounded-md" onClick= {()=>{let data = filterData(searchText, listOfRestorent); setFilterRestorent(data)}}>Search</button>
            </div>

            <input type="text" value={user.name} className="border to-black" onChange
            ={(e)=> setUser({...user,name:e.target.value})}></input>
            
            <input type="text" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})} className="border to-black"></input>
            <div className="filter">          
                {/* <button className="filter-btn" onClick={()=> {const filteredList = listOfRestorent.filter((res)=> res?.data?.avgRating > 4);setFilterRestorent(filteredList); }}>Top Rated Restorants</button> */}
                <button className="filter-btn" onClick={()=> {let filteredList = listOfRestorent.filter((res)=> res?.data?.avgRating > 4);setFilterRestorent(filteredList);  }}>Top Rated Restorants</button>
              
            </div>
          
            <div className="flex flex-wrap">
                {
                   
                   filterRestorent.map((restorent) =>{ return (
                        <Link to={"/restorents/"+ restorent?.data?.id} key={restorent?.data?.id}>
                            <RestorentCard  resData={restorent.data}/>
                        </Link>
                )})}
            </div>
            </> 
        </div>
    );
}

export default Body;