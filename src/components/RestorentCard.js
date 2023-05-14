import {useContext} from "react";
import {IMG_CDN_URL} from "../util/constants";
import UserContext from "../util/UserContext";
 
const RestorentCard = (props) => {
    // Optional chaining (?.)
    console.log(props);
    const {resData} = props;
    const {user} = useContext(UserContext);
    return (
        // <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50" style={{backgroundColor:"#f0f0f0"}}>
        <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50 ">
            <img className="res-logo" alt="res-logo" src={IMG_CDN_URL + resData.cloudinaryImageId } /> 
            <h3 className="font-bold text-2xl">{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} star</h4>
            <h4>{resData.costForTwo/100} For Two</h4>
            <h4>{resData.dileveryTime} minuts</h4>
            <h4>{user.name}-{user.email}</h4>
            
        </div>
    )
}

export default RestorentCard;