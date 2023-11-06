import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingmovie } from '../redux/movieSlice'

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)
    const getNowPlayingMovies=async()=>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1",options)
        dispatch(addNowPlayingmovie(response.data.results))
    }
    useEffect(()=>{
       !nowPlayingMovies&& getNowPlayingMovies()
    },[])
 
}

export default useNowPlayingMovies