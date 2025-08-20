import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';


const axiosinstance = axios.create({
    baseURL: 'https://khula-job-server.vercel.app',
    withCredentials: true
});

const useAxios = () => {

    const {logout}=UseAuth();
    const navigate=useNavigate();

    useEffect(() => {
        axiosinstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.error("Axios error:", error);
            if(error.status===401 || error.status===403){
                console.log('logOut to user')
                logout()
                .then(()=>{
                    console.log('logOut user')
                    navigate('/login')
                })
                .catch(error=>
                    console.log(error)
                )
            }
            return Promise.reject(error);
        });

        
    }, []);
    return axiosinstance;
};

export default useAxios;