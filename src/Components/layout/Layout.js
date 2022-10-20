import User from "../Header/User/User";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return(<div>
    <User/>
        <Outlet/>
    </div>)
}