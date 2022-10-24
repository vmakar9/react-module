import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";

import css from "./Movie.module.css"
import {genreActions} from "../../../../redux/slices/GenreSlice"

export default function Movie({movie}){

    const statrUrl=`https://image.tmdb.org/t/p/w500`

    const dispatch = useDispatch()

    const [genres,setGenres] = useState([])

    useEffect(()=>{
      dispatch(genreActions.getGenre()).then(({payload})=>setGenres(payload.genres))
    },[])

    const badge = genres.filter(genre => movie.genre_ids.includes(genre.id)).map(item=>item.name)
    badge.length =2

    const navigate = useNavigate()

    return(<div className={css.ListCard}>
        <div onClick={()=> navigate('details',{state:movie})}>
        <div className={css.Card}>
            <img className={css.img} src={`${statrUrl}${movie.poster_path}`} alt={'poster'}/>
            <h3>{movie.title}</h3>
            <h3>{movie.release_date}</h3>
            <div>
                {badge.map((item,index)=>(
                    <p key={index}>{item}</p>))}
            </div>
            <ReactStars activeColor={'red'} size={35} count={10} value={movie.vote_average} isHalf={true} classNames={css.Rait}/>
            </div>
         </div>
    </div>)
}