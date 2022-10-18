import css from './User.module.css'

export default function User(){
    return(<div className={css.User}>
        <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
        alt={'user'}/>
        <h3>Welcome to the club, buddy</h3>
    </div>)
}