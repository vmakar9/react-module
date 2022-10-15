import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";

const moviesService={
    getAll:()=>axiosService.get(urls.movies)
}

export {moviesService}