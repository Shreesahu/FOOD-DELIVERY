//HEADER COMPONENT
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
export const Header =() =>{
    // let btnName = "Login";

    const[btnName,setbtnname] = useState("Login");
    const onlineStatus = useOnlineStatus() ;

    const {loggedInUser} = useContext(userContext);
    // console.log(loggedInUser);

    // selector => we are subscribing to the store using selector

    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <header className="flex mb-4 text-blue-700 bg-pink-300 justify-between shadow-lg" >

            <a href="#" className="w-24 p-3"> <img src={LOGO_URL}/> </a>
        <nav className="flex ml-4 px-4 items-center ">

            <ul className="flex space-x-8 ml-4 px-4">
                <li> Online {onlineStatus ? "🟢" : "🔴"} </li>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/food">food</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/cart" className="font-semibold">Cart<i class='bx bxs-cart bx-tada' ></i>{cartItems.length}</Link>
                <li><i class='bx bx-user-circle bx-fade-up' ></i>{loggedInUser}</li>
            </ul>
            {/* i want this jsx login button  to be dynamic */}
            {/*  */}
            <button className="ml-4 rounded-lg px-4 bg-blue-200" onClick={ () => {
                setbtnname("Logout") }}> {btnName} </button>
        </nav>
        </header>
    )
}

export default Header;
