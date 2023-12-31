import React, { useEffect }  from 'react'
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeuser ,addUser} from '../redux/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { toggleSearchView } from '../redux/GPTSlice';

const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user)
  const signout=()=>{
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL
          })
        );
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser())
        navigate("/")
      }
    });
  },[])

 
  return (
    <div  className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix' />
        {user && <div className='flex p-2 justify-between'>
            <img alt='icon' className='hidden md:block w-12 h-12' src={user.photoURL} />
            <button className="font-bold text-white mx-1" onClick={signout}>Sign Out</button>
          </div>}
    </div>
  )
}

export default Header