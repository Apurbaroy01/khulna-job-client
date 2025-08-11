import { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';

const MyPost = () => {
    const [job, setJob] = useState([]);
    const { user } = UseAuth();
    
    useEffect(() => {
        if (user?.email) { // user আছে কিনা চেক
            fetch(`http://localhost:5000/jobs?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setJob(data);
                })
                .catch(err => console.error(err));
        }
    }, [user?.email]); // optional chaining ব্যবহার

    return (
        <div>
            <h2 className='text-white'>My post {job.length}</h2>
        </div>
    );
};

export default MyPost;
