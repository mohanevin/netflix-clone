import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showSearch:false
    },
    reducers:{
        toggleSearchView:(state)=>{
            state.showSearch=!state.showSearch
        }
    }
})


export const {toggleSearchView}=gptSlice.actions

export default gptSlice.reducer;