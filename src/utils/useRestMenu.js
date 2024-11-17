import { useEffect , useState } from "react";
import { MENU_URL } from "./constant";
const useRestMenu = (resId) => {
    //fetch the data
    const [resMenuList ,SetResMenuList] = useState([])
    useEffect(()=>{
        fetchMenu();

    },[]);

    useEffect(()=>{
      // console.log(resMenuList);

  },[resMenuList]);
  
    const fetchMenu = async () => {
          const data = await fetch(MENU_URL + resId);
          // console.log("Called fetchMenu")
          const jsonData = await data.json();
          SetResMenuList(jsonData.data);
        
        }
        return resMenuList ;
      };



export default useRestMenu;