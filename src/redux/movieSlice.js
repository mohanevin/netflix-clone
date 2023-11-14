import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingmovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingmovie:(state,action)=>{
            state.nowPlayingmovies=action.payload
        },
        addtrailer:(state,action)=>{
            state.movieTrailer=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        }
    }
})

export const {addNowPlayingmovie,addtrailer,addPopularMovies,addTopRatedMovies}=movieSlice.actions

export default movieSlice.reducer