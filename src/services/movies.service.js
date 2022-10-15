import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";

const moviesService={
    getAll:(page=1)=>axiosService.get(urls.movies,{params:{page}})
}

export {moviesService}