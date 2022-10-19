import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";

const moviesService={
    getAll:()=>axiosService.get(urls.movies),
    getGenre:()=>axiosService.get(urls.genre)
}

export {moviesService}