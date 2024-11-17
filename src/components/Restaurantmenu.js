import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import ResCategoryItem from "./ResCategoryItem";
const Restaurantmenu = ()=>{

    // console.log(ResMenuList , "printing the recieved item ");
    const [showIndex,setShowIndex] = useState(0);
    const {resId} = useParams();
    const ResMenuList = useRestMenu(resId);
   
    if(ResMenuList.length===0){
        return <Shimmer/> ;
    }

    else{
        // console.log(ResMenuList);
        const {name,cuisines,costForTwoMessage,avgRating,deliveryTime} = ResMenuList?.cards[2]?.card?.card?.info;

        const menuArrayList  = ResMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

        const catagories = menuArrayList.filter((c)=>
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        // console.log(catagories);

        return (
            <div className=" text-center ">
                <h1 className="font-bold text-3xl text-center">{name}</h1>
            <div className="text-start p-4 my-5 mx-auto border border-pink-250 shadow-lg shadow-slate-500 rounded-md w-[50%]">
                <h3 className="ml-3 p-1 font-bold"> {avgRating} ⭐ (Rating) • {costForTwoMessage}</h3>
                <h2 className="ml-3 p-1 text-orange-600 underline font-semibold">{cuisines.join(",")}</h2>
                <h3 className="ml-3 p-1">Dilivery time -30min {deliveryTime}</h3>
            </div>

{/* now we creeate accordiaans for food categories */}
{/* categories wale arr me map lgayge jo hr 1 cateory ko traverse karega or jo data each ko pas karge Rescategory item me as props ,so that we can use use the data as props */}
            
            {
                catagories.map((category, index)=>( <ResCategoryItem 
                key={category?.card?.card.title }
                data= {category?.card?.card}
                showItems = {index=== showIndex ? true :false}
                setShowIndex ={() => setShowIndex(index)}/>))
            }  
            </div>    
            );
    }
        

    };
  
        
export default Restaurantmenu;