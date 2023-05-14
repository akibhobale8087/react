import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {FETCH_MENU_URL,IMG_CDN_URL} from "../util/constants";
import useRestorentMenu from "../Hooks/useRestorentMenu";
import {useDispatch} from "react-redux";
import { addItem } from "../util/cartSlice";

const Restorents = () =>{
    const {id} = useParams();
    console.log(id);
   // const [restaurant,setRestaurant] = useState(null);

    // useEffect(()=>{
    //     restorentMenu();
    // },[])
 
    // async function restorentMenu(){
    //     const data = await fetch(FETCH_MENU_URL+id);
    //     const json = await data.json();
    //     console.log(json);
    //     setRestaurant(json.data);
    // }

    let restaurant = useRestorentMenu(id);

    let dispatch = useDispatch();

    const handleAddItem = (data) =>{
        dispatch(addItem(data))
    }
   // console.log(restaurant);
  console.log(restaurant?.card?.card?.info);
    return (
        <div className="flex">
            <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.card?.card?.info?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.card?.card?.info?.cloudinaryImageId} />
        <h3>{restaurant?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant?.card?.card?.info?.costForTwoMessage}</h3>
        <button className="p-2 m-5 bg-green-100" onClick={()=> handleAddItem(restaurant?.card?.card?.info)}> Add Item</button>
        <div>
            <h1>Menu</h1>
            <ul>
                {/* {Object.values(restaurant?.card?.card?.info?)} */}
            </ul>
        </div>
        </div>
    )
}

export default Restorents;