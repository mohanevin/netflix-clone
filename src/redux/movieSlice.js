import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingmovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowPlayingmovie:(state,action)=>{
            state.nowPlayingmovies=action.payload
        },
        addtrailer:(state,action)=>{
            state.movieTrailer=action.payload
        }
    }
})

export const {addNowPlayingmovie,addtrailer}=movieSlice.actions

export default movieSlice.reducer