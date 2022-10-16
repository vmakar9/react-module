import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";

const initialState={
    movies:[]
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getAll()
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.movies = action.payload
        }
    }
})

const {reducer:movieReducer}= movieSlice;

const movieActions={
    getAll
}

export {movieActions,movieReducer}