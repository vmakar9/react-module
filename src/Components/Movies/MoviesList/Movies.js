import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../../redux/slices/MovieSlice";
import Movie from "./Movie";

export default function Movies(){

    const dispatch = useDispatch()

    const {movies} =  useSelector(state => state.movies)

    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[])

    return(<div>
        {movies.map(movie=><Movie  movie={movie}/>)}
    </div>)
}