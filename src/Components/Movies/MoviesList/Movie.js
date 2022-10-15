export default function Movie({movie}){
    const {title,release_date,poster_path}=movie;
    return(<div>
        <div>
            <h3> {title} </h3>
            <img src={poster_path} alt = 'poster'/>
            <h6> {release_date}</h6>
        </div>
    </div>)
}