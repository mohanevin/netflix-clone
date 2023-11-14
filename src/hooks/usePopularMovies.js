import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies} from '../redux/movieSlice'

const usePopularMovies = () => {
    const dispatch=useDispatch()
    const popularMovies=useSelector((store)=>store.movies.popularMovies)
    const getPopularMovies=async()=>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
        dispatch(addPopularMovies(response.data.results))
    }
    useEffect(()=>{
       !popularMovies&& getPopularMovies()
    },[])
 
}

export default usePopularMovies