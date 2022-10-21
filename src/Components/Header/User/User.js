import css from './User.module.css'
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch} from "react-redux";
import {themeActions as themeAction} from "../../../redux/slices/ThemeSlice";
import { faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'
export default function User() {

    const [theme, setTheme] = useState(false)

    const dispatch = useDispatch()

    return (<div className={css.Header}>

        <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-owl-halloween-flatart-icons-lineal-color-flatarticons.png"/>
        <h3>Vlad Makar</h3>

        {!theme ? (<FontAwesomeIcon
                icon={faToggleOff}
                className={css.header_theme}
                onClick={() => {
                    setTheme(true)
                    dispatch(themeAction.setLightTheme())
                }
                }/>)
            : (<FontAwesomeIcon
                icon={faToggleOn} className={css.header_theme}
                onClick={() => {
                    setTheme(false)
                    dispatch(themeAction.setDarkTheme())
                }}
            />)}

    </div>)

}