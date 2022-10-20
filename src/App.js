
import {Navigate, Route, Routes} from "react-router-dom";
import MoviePage from "./Components/MoviePage/MoviePage";
import Details from "./Components/Details/Details";
import Layout from "./Components/layout/Layout";





function App() {

  return (
    <div>
        <Routes>
          <Route path={'/'} element = {<Layout/>}>
              <Route index element={<Navigate to={'/movies'}/>}/>
              <Route path={'/movies'} element={<MoviePage/>}/>
              <Route path={'/movies/details'} element={<Details/>}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
