
import {Navigate, Route, Routes} from "react-router-dom";
import MoviePage from "./Components/MoviePage/MoviePage";
import {Details} from "@mui/icons-material";




function App() {

  return (
    <div>
        <Routes>
          <Route path={'/'} element = {<MoviePage/>}>
              <Route index element={<Navigate to={'/movies'}/>}/>
              <Route path={'/movies'} element={<MoviePage/>}/>
              <Route path={'/movies/details'} element={<Details/>}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
