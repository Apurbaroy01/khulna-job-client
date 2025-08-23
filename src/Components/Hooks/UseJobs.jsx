import axios from 'axios';
import  { useEffect, useState } from 'react';

const UseJobs = (sort,search) => {
    const [jobs, setJobs]=useState([]);
    const [loading, setLoading]=useState()
    
    useEffect(()=>{
        axios.get(`https://khula-job-server.vercel.app/jobs?sort=${sort}&search=${search}`)
        .then(res=>{
            
            setJobs(res.data)
            setLoading(false)
        })
        

    },[sort,search])
    return{jobs, loading}
};

export default UseJobs;