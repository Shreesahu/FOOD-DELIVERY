import { useDispatch, useSelector } from "react-redux";
import ResCategoryItemList from "./ResCategoryItemList";
import { removeItem , clearCart , incrementQuantity, decrementQuantity  } from "../utils/cartSlice";
const Cart = () => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const HandleOnRemove = (ID)=>{
        // dispatch(removeItem(ID));
        dispatch(removeItem(ID))
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };


    const cart = useSelector((store) => store.cart.items);


        // here we will be calculating the total cost of all the items 
    const totalCost = cart.reduce(            (total, item) =>
        total + item.quantity * (item.card.info.price || item.card.info.defaultPrice) / 100,
        0 );
    


    return (
        <div>
            <button className=" font-bold p-3 m-3 right-3 bg-black text-white rounded-lg"
                onClick={handleClearCart}>CLEAR CART</button>


            {cart.length === 0 ? (<div className="text-lg font-bold text-center">Cart is Empty</div>) : (

                <div>

                {cart.map((items, index) => (
                    // due to using ( bracket Everything will be returned implicitily where as  in {} whatEver we want to return need to be returned explicitly 

                    //map function is being processed but what is being returned from this ??
                    cart.length === 0 ? (<div>Empty Cart</div>) :

                        (<div className=" flex border-b-2  p-5" key={items.card.info.id}>
                            {console.log(items.card.info.defaultPrice, "h")}
                            <div className="flex flex-col w-9/12 mb-2">
                                <div className=" my-2 flex flex-col ">
                                    <span className=" font-bold text-xl">{items.card.info.name}</span>
                                    <span className=" font-semibold mt-2 text-lg">price : ₹ {items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice / 100}</span>
                                </div>

                                <div >
                                    <span className=" text-balance">{items.card.info.description}</span>
                                </div>
                            </div>
                            <div className="w-3/12 relative flex justify-center">
                                <button className="absolute  bg-black text-gray-100 right-[-20px] top-[-10px] rounded-full px-1 " onClick={() => HandleOnRemove(index)}> 🗑️</button>
                            <div>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660//${items.card.info.imageId}`} />
                                <div className="flex items-center mt-2">
                                <button
                                        className="bg-gray-200 p-2 rounded-l "
                                        onClick={() => handleDecrement(items.card.info.id)}
                                >
                                        -
                                </button>
                                <div className="p-2">{items.quantity}</div>
                                <button
                                     className="bg-gray-200 p-2 rounded-r"
                                    onClick={() => handleIncrement(items.card.info.id)}
                                >
                                        +
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>)


                ))};  

                <div className="text-xl font-bold  flex border-b-2  p-5">Total Cost: ₹ {totalCost.toFixed(2)}                        
                </div>              
            
                </div>
            )}
        </div>
    )
}
export default Cart;