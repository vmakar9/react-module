import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";

const moviesService={
    getAll:()=>axiosService.get(urls.movies),
    getMovie:(id)=>axiosService.get(urls.movie+'/'+id)
}

export {moviesService}