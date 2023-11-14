import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../redux/movieSlice'

const useTopRated = () => {
    const dispatch=useDispatch()
    const useTopRatedMovies=useSelector((store)=>store.movies.nowPlayingMovies)
    const getuseTopRatedMovies=async()=>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
        dispatch(addTopRatedMovies(response.data.results))
    }
    useEffect(()=>{
       !useTopRatedMovies&& getuseTopRatedMovies()
    },[])
 
}

export default useTopRated