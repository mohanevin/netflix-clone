import React, { useRef, useState } from 'react'
import Header from './Header'
import '../styles/login.css'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { validateForm } from '../utils/validate'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from "../redux/userSlice";


const Login = () => {
    const dispatch=useDispatch()
    const [toggle,setToggle]=useState(true)
    const email=useRef(null)
    const [errorMessage,setErrorMessage]=useState(null)
    const password=useRef(null)
    const fullname=useRef(null)
    const toggleSignUp=()=>{
        setToggle(!toggle)
    }
    const handleSubmit=()=>{
        let validate=validateForm(email.current.value,password.current.value)
        setErrorMessage(validate)
        
        if(validate===null)
        {
            if(!toggle)
            {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                    updateProfile(auth.currentUser, {
                        displayName: fullname.current.value, photoURL: "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
                      }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                          addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                          })
                        );
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage("Sign up failed. kindly retry")
                });
            }
            else
            {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            }
        }
        
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='h-screen w-screen object-fill' src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='login page' />
        </div>
        

        <form onSubmit={(e)=>e.preventDefault()} className=' w-full md:w-4/12 absolute p- bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
            <div className='my-6'>
                <h1 className='signin-text mt-4 ml-16'>{toggle?"Sign In":"Sign Up"}</h1>
                <div className='text-center'>
                    {!toggle&&<input type='text' ref={fullname} placeholder='Full name' className='my-4 p-3 w-3/4 rounded-md'/>}
                    <input ref={email} type='text' placeholder='Email or Phone number' className='my-4 p-3 w-3/4 rounded-md'/>
                    <input ref={password} type='password' placeholder='Password' className='my-4 p-3 w-3/4 rounded-md'/>
                    <button className='my-4 p-3 w-3/4 rounded-md login-btn' onClick={handleSubmit}>{toggle?"Sign In":"Sign Up"}</button>
                </div>
                <p className="text-red-500  text-lg py-2 ml-16">{errorMessage}</p>
                <p className='ml-16 my-4 cursor-pointer'onClick={toggleSignUp} >{toggle?"New to Netflix? Sign up now.":"Already registered? sign in now"}</p>
            </div>
        </form>
    </div>
  )
}

export default Login