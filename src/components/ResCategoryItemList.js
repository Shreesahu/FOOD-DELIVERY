import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";



const ResCategoryItemList =({items}) =>{
    // console.log(items);

    const currentPathOfRequest = useLocation();
    console.log(currentPathOfRequest);


    const dispatch = useDispatch();

    const handleAddItem=(item)=>{
        //dispatch an action 
        console.log(item.card.info.id);
        dispatch(addItem(item));
    };


    return(
        <div className="ml-2"> 
            {items.map( item => 
                (<div key={item.card.info.id} className=" flex justify-between text-left border-gray-300 border-b-2">
                    <div className="w-9/12">
                      <div className="py-2">
                        <span className="font-bold p-2"  >{item.card.info.name}</span>
                        <span className="font-bold">- ₹{item.card.info.price/100}</span>
                      </div>
                      <p className="text-xs p-2 ">{item.card.info.description}</p>
                    </div> 
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-2 rounded-md bg-slate-400 shadow-lg "
                            onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                        <img src ={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>
                </div>)
            )}
        </div> 
        ); 
}
export default ResCategoryItemList ; 