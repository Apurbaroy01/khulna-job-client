import axios from 'axios';
import { useEffect, useState } from 'react';

const UseJobs = (sort, search, currentpage, itemPage) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);

        axios.get(`http://localhost:5000/jobs?page=${currentpage}&size=${itemPage}&sort=${sort}&search=${search}`)
            .then(res => {

                setJobs(res.data)
                setLoading(false)
            })


    }, [sort, search, currentpage, itemPage])
    return { jobs, loading }
};

export default UseJobs;