import css from "./Movie.module.css"
import ReactStars from "react-rating-stars-component/dist/react-stars";


export default function Movie({movie}){
    const statrUrl=`https://image.tmdb.org/t/p/w500`

    return(<div className={css.ListCard}>
        <div className={css.Card}>
            <img className={css.img} src={`${statrUrl}${movie.poster_path}`} alt={'poster'}/>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <ReactStars activeColor={'red'} size={35} count={10} value={movie.vote_average}/>
         </div>
    </div>)
}