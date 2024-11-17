import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import Restaurantmenu from "./components/Restaurantmenu";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import userContext from "./utils/userContext";
import Cart from "./components/cart";

const Food = lazy(() => import("./components/Food"));

// high level conytainer that contain the all the app 
const Applayout =()=>{

    const [userName , setUserName] = useState();
    // authentication 

    useEffect(()=>{
        const data ={
            name : "shreeya sahu",
        };
        setUserName(data.name);
    },[]);
    return (

        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser:userName}}>
        <div className="appContainer">
            <Header/>
            <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
    )
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<About/>,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/food",
                element:<Food/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
 
                path:"/restaurant/:resId",
                element:<Restaurantmenu/>,
            }
        ],
        errorElement:<Error/>, 
        // error element provide by useRouterError hook which is provided by react-Router-dom library to return a componnenet when eerror is occure own cust error pg
        //which is imported error component
    },
    
]);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);