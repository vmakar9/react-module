
import {Navigate, Route, Routes} from "react-router-dom";
import MoviePage from "./Components/MoviePage/MoviePage";
import Details from "./Components/Details/Details";
import Layout from "./Components/layout/Layout";
import {useSelector} from "react-redux";





function App() {

    const {background, color} = useSelector(state => state.theme)

  return (
    <div>
        <div style={{color:color,background:background}}>
        <Routes>
          <Route path={'/'} element = {<Layout/>}>
              <Route index element={<Navigate to={'/movies'}/>}/>
              <Route path={'/movies'} element={<MoviePage/>}/>
              <Route path={'/movies/details'} element={<Details/>}/>
          </Route>
        </Routes>
        </div>
    </div>
  );
}

export default App;
