import {combineReducers,configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/MovieSlice";
import {genreReducer} from "./slices/GenreSlice";
import {themeReducer} from "./slices/ThemeSlice";

const rootReducer = combineReducers({
    movie:movieReducer,
    genre:genreReducer,
    theme:themeReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}