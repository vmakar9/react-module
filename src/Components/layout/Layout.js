import {Outlet} from "react-router-dom";

import User from "../Header/User/User";

export default function Layout(){
    return(<div>
    <User/>
        <Outlet/>
    </div>)
}