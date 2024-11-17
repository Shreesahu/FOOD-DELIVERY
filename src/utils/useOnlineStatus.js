import { useEffect, useState } from "react";

 const useOnlineStatus = () => {
    //check if offline or online with the help of event listner
    // Window: online event
    // The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.
    
    
    const [onlineStatus , setOnlineStatus] = useState(true);
    
    
    useEffect(() =>{
        window.addEventListener("offline" ,(event)=> {
            setOnlineStatus(false) ;
        }) ;

        window.addEventListener("online" ,(event)=> {
            setOnlineStatus(true) ;
        });
    },[]);

    // reurn the Boolean value true if online else flase 

    return onlineStatus ;
 }

 export default useOnlineStatus ;