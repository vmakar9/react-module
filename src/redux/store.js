import {combineReducers,configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/MovieSlice";
import {genreReducer} from "./slices/GenreSlice";

const rootReducer = combineReducers({
    movie:movieReducer,
    genre:genreReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}