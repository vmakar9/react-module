import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.service";

const initialState={
    genres:[]
}

const getGenre = createAsyncThunk(
    'genreSlice/getGenre',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getGenre()
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    extraReducers:{
        [getGenre.fulfilled]:(state,action)=>{
            state.genres = action.payload
        }
    }
})

const {reducer:genreReducer} = genreSlice

const genreActions={
    getGenre
}

export {genreActions,genreReducer}