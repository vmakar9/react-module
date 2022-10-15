export default function Movie({movie}){
    const {title,release_date}=movie;
    return(<div>
        <div>
            <h3> {title} </h3>

            <h6> {release_date}</h6>
        </div>
    </div>)
}