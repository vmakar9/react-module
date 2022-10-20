import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/GenreSlice";

export default function Details(){

    const  location = useLocation()

    const dispatch = useDispatch()

    const {state} = location;

    const {genres}= useSelector(state=>state.genre)

    const { genre_ids, overview, original_language, original_title, popularity, title, vote_average, vote_count, poster_path} =state

    useEffect(()=>{
        dispatch(genreActions.getGenre())
    },[dispatch])

    const staterUrl=`https://image.tmdb.org/t/p/w500`

    const movieGenres = genres?.genres?.filter(genre=>genre_ids.includes(genre.id))

    return(<div className={'details'}>
        <img src={`${staterUrl}${poster_path}`} alt ={'poster'}/>
        <p> {original_language}</p>
        <p> {vote_count}</p>
        <p> {vote_average}</p>
        <div>
            {movieGenres?.map(genre => (<p key={genre.id}>{genre.name}</p>))}
        </div>
    </div>)
}