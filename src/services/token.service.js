import {axiosService} from "./axios.service";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmNjYzc1ZTFkODBmMmRlNmY4YTI4NDg2YjU0MmU1YSIsInN1YiI6IjYzNGFhYzM3YzE3NWIyMDA4MmRjZmYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i2Uj2ZCFMRvJDix7sVGrziulMjniICPKrrNE_MXRiaY';

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`
})