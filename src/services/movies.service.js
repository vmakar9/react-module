import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";

const moviesService={
    getAll:()=>axiosService.get(urls.movie)
}

export {moviesService}