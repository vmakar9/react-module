import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../../../redux/slices/MovieSlice";
import Movie from "../Movie/Movie";

export default function Movies(){

    const dispatch = useDispatch()

    const {movies} =  useSelector(state => state.movie)



    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[dispatch])

    console.log(movies)

    return(<div>
        {movies.results?.map((movie,index)=><Movie key={index} movie={movie}/>)}
    </div>)
}