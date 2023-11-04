import React, { useState } from 'react'
import Header from './Header'
import '../styles/login.css'

const Login = () => {
    const [toggle,setToggle]=useState(true)
    const toggleSignUp=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='h-screen w-screen object-fill' src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='login page' />
        </div>
        

        <form className=' w-full md:w-4/12 absolute p- bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
            <div className='my-6'>
                <h1 className='signin-text mt-4 ml-16'>{toggle?"Sign In":"Sign Up"}</h1>
                <div className='text-center'>
                    {toggle&&<input type='text' placeholder='Full name' className='my-4 p-3 w-3/4 '/>}
                    <input type='text' placeholder='Email or Phone number' className='my-4 p-3 w-3/4 '/>
                    <input type='password' placeholder='Password' className='my-4 p-3 w-3/4 '/>
                    <button className='my-4 p-3 w-3/4  login-btn'>{toggle?"Sign In":"Sign Up"}</button>
                </div>
                <p className='ml-16 my-4 cursor-pointer'onClick={toggleSignUp} >{toggle?"New to Netflix? Sign up now.":"Already registered? sign in now"}</p>
            </div>
        </form>
    </div>
  )
}

export default Login