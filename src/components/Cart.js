import {useSelector,useDispatch} from "react-redux";
import { clearCart } from "../util/cartSlice";

const Cart = () =>{
 
    const cartItems = useSelector(store => store.cart.items);
    
    const dispatch = useDispatch();
    console.log(cartItems)
function handleClearCart(){
    dispatch(clearCart());
}
    return(
        <div>
            <button className="p-2 m-4 bg-green-500" onClick={()=> handleClearCart()}>Clear Cart</button>
           
        </div>
    )
}

export default Cart;