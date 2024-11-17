import { CDN_URL } from "../utils/constant";
 
const RestaurantCard = (props) =>{
    // console.log(props)
    const {resdata} = props;
    const {name,cuisines,costForTwo,avgRating,deliveryTime,cloudinaryImageId} = resdata?.info;
    return (
        <div className="m-[5px] cursor-pointer shadow-lg min-h-[350px] p-[5px] w-[270px] bg-slate-200 rounded-lg overflow-hidden">
            <img className=" w-[100%] rounded-lg h-[200px] object-cover" alt="restaurent logo" src={
             CDN_URL  + cloudinaryImageId}/>
            <h4 className="font-bold p-2">{name}</h4>
            <h4 className="font-medium p-2 text-wrap ">{cuisines.join(",")}</h4>
            <h4 className="p-2">{costForTwo}</h4>
            <h4 className=" p-2">{avgRating} Stars</h4>
            <h4 className=" p-2"> 30{deliveryTime} minutes</h4>

        </div> 
    );
};

export const withLabelDiscount =(RestaurentCard) =>{
    //it will return a component
    return () =>{
        return (
            <div>
                <label></label>
                <RestaurentCard />
            </div>
            
        );
    };
};

export default RestaurantCard;