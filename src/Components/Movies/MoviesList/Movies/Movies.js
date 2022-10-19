import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../../../redux/slices/MovieSlice";
import Movie from "../Movie/Movie";
import {genreActions} from "../../../../redux/slices/GenreSlice";


export default function Movies(){

    const dispatch = useDispatch()

    const {movies} =  useSelector(state => state.movie)

    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[dispatch])


    const {genres} = useSelector(state => state.genre)


    return(<div>
        {movies.results?.map(movie=><Movie key={movie.id} movie={movie}/>)}
    </div>)
}