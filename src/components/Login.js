import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constatnts";
import checkvaliddata from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login =()=>{
    const [errorMessage , setErrorMessage] = useState(null);
    const[isSignIn , setIsSignIn] = useState(true);
    const dispatch = useDispatch()
    const Name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const user = useSelector(store =>store.user);

    const handlebuttonClick = ()=>{
        
        //validate the form data
        // then basis of sign in or sign up button we perform login or signup/registered
        const message=checkvaliddata(email.current.value,password.current.value);
        setErrorMessage(message);
        //further proceed it signin /sign up
        if(message) return;

        if(isSignIn){
            //sign in logic
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredential) => {
                // Signed in 
            const user = userCredential.user;
           
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
  });
        }
        else{
    // sign up logic
            createUserWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
            .then((userCredential) => {
    // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: Name?.current?.value, photoURL: "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              }).then(() => {
                // Profile updated!
                // console.log(user , "Updated Profile")
                const { uid , email , displayName , photoURL} = auth.currentUser;

                dispatch(addUser({uid:uid , email:email , displayName: displayName , photoURL:photoURL }));
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
            
    // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
    };

    const toggleSigninForm = ()=>{
        setIsSignIn(!isSignIn);
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img alt="BG_URL" src={BG_URL}></img>
            </div>

            { !user && (<div>
                <form onSubmit={(e)=> e.preventDefault()} className="absolute w-3/12 p-10 bg-black bg-opacity-80 mx-auto my-36 right-0 left-0 text-white rounded-lg" >

                    <h1 className="text-3xl py-3 font-semibold">{isSignIn? "Sign In" : "Sign Up"}</h1>

                    {!isSignIn && <input ref={Name} type="text" placeholder="Full Name" className="rounded-md p-4 my-2 w-11/12 bg-gray-800"/>}

                    <input ref={email} type="text" placeholder="Email Address" className="rounded-md p-4 my-2 w-11/12 bg-gray-800"/>

                    <input ref={password} type="password" placeholder="Password" className="rounded-md p-4 my-2 w-11/12 bg-gray-800"/>
                    
                    <p className="text-red-700">{errorMessage}</p>
                    <button className="p-3 my-4 rounded-lg font-semibold text-xl bg-red-700 w-11/12" onClick={handlebuttonClick}>{isSignIn? "Sign In" :"Sign Up"}</button>

                    <p className="py-4 underline cursor-pointer" onClick={toggleSigninForm}>{isSignIn? "New to netflix? Sign Up Now" :"Already Registered? Sign In, now"}</p>

                </form>
            </div>)}
        </div>
    );
};
export default Login;