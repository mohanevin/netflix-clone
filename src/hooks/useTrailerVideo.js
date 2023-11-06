import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addtrailer } from '../redux/movieSlice';
import axios from 'axios';

const useTrailerVideo = (id) => {
    const dispatch=useDispatch()
    const movieTrailer=useSelector((store)=>store.movies.movieTrailer)
 const getMovieTrailer=async()=>{
    const response =await axios(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "/videos?language=en-US",
        options
      );

    const filterTrailer=response.data.results.filter((video)=>video.type==="Trailer")
    const trailer=filterTrailer.length?filterTrailer[0]:response.data.results[0]
    dispatch(addtrailer(trailer))
 } 
 useEffect(()=>{
    !movieTrailer && getMovieTrailer()
 },[])

}

export default useTrailerVideo