//BODY COMPONENT
import { useState ,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 


const Body = ()=>{
  //state variabble with the use of useState which is reacthook (means inbuilt power full function)
  //to manipulate the data we listOfRestaurant instead of reslist.
  const [listOfRestaurant ,setlistOfRestaurant ]= useState([]);
  const [filteredListOfRestaurant ,setfilteredListOfRestaurant] = useState("");

  //searchText bind with i/p box 
  const [searchText , setSearchText] =useState("");
  // console.log(listOfRestaurant);


  // const discountLabel = withLabelDiscount(RestaurentCard);


  useEffect(()=>{
    fetchData()
  }, []);

  
  const fetchData = async ()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const jsondata = await data.json();
      // console.log(jsondata);
      // const jsonData = Array.toarray
      // console.log(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info , "Hi");
      // console.log(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants , "Json data")
      // ?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info
      setlistOfRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredListOfRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  

// conditionAL rendering.
  // if(listOfRestaurant.length === 0){
  //   console.log("shui,")
  //   return <Shimmer/> ;
  // }

  const onlineStatus = useOnlineStatus() ;

  if(onlineStatus === false) return(
    <h1>Looks Like You Are Offline Please check Internet Connection</h1> 
  ) ;

    return listOfRestaurant?.length === 0 ? <Shimmer/> : (
        <section className="body-container">
            <div className="flex items-center p-4 mx-2 space-x-6">

                <input type="text" placeholder="what do you wanna eat today" className= "border border-solid mr-2 border-gray-900 rounded-md " value={searchText} onChange={(e)=> { setSearchText(e.target.value)}} />
                <button className="ml-4 rounded-lg px-4 bg-blue-200" onClick={()=>{

                  const filteredRest = listOfRestaurant.filter((res)=>{
                     
                     return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  });
                  setfilteredListOfRestaurant(filteredRest);
                }} >Search</button>

              {/* body container have filtered div which filtered cards */}
              <button className="ml-4 rounded-lg px-4 bg-blue-200"
               onClick={ ()=> {
                  const filteredList = listOfRestaurant.filter((res)=> res.info.avgRating > 4);
                  setfilteredListOfRestaurant(filteredList);
                }}>
                Top Rated Reastaurant </button></div> 

            <div className="flex flex-wrap m-6 justify-between">
                {/* restaurentCArd */}
                {/* React will wwrap it and pas it over as props where this cards are create 
                props are objects */}
                {/* EAch child in this wherre we are looping should have a unique key property !
                it means that each child have to uniquely represent  */}
                {
                  filteredListOfRestaurant.map( (restaurant) =>(
                   <Link 
                    key={restaurant?.info?.id}
                     to={"restaurant/"+restaurant?.info?.id }>
                      <RestaurantCard  resdata = {restaurant} />
                      </Link>
                      ) )
                  }             
            </div>
        </section>
    )
}
export default Body;
