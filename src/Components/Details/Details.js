import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ReactStars from "react-rating-stars-component";

import {genreActions} from "../../redux/slices/GenreSlice";
import css from "./Details.module.css"

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

    return(<div className={css.details}>
        <img src={`${staterUrl}${poster_path}`} alt ={'poster'}/>
        <h3>title: {title}</h3>
        <h3>original title: {original_title}</h3>
        <h3>original language: {original_language}</h3>
        <p> {overview}</p>
        <div className={css.genres}>
          {movieGenres?.map(genre => (<p key={genre.id}>{genre.name}</p>))}
        </div>
        <p>popularity: {popularity}</p>
        <p> vote count: {vote_count}</p>
        <p> vote average: {vote_average}</p>
        <ReactStars activeColor={'red'} size={35} count={10} value={vote_average} isHalf={true} classNames={css.Raiting}/>
    </div>)
}