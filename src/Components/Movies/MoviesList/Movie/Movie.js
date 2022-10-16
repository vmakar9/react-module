import css from "./Movie.module.css"

export default function Movie({movie}){
    const statrUrl=`https://image.tmdb.org/t/p/w500`

    return(<div className={css.ListCard}>
        <div className={css.Card}>
            <img className={css.img} src={`${statrUrl}${movie.poster_path}`} alt={'poster'}/>
            <h3>{movie.title}</h3>
            <h3>{movie.vote_average}</h3>
         </div>
    </div>)
}