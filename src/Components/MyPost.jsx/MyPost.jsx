import { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import useAxios from '../Hooks/UseAxios';
// import axios from 'axios';


const MyPost = () => {
    const [job, setJob] = useState([]);
    const { user } = UseAuth();

    const axiosSorce = useAxios();

    useEffect(() => {
        if (user?.email) { // user আছে কিনা চেক
            

            axiosSorce.get(`/jobs?email=${user.email}`)
            .then(res=>{
                console.log(res.data)
                setJob(res.data);
            })

        }
    }, [user?.email]); // optional chaining ব্যবহার

    return (
        <div className="overflow-x-auto w-11/12 mx-auto mt-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-2 text-white mt-20">
            <table className="table ">
                {/* head */}
                <thead className="border-b-2 text-white">
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Time & date</th>
                        <th>count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        job.map(application =>
                            <tr key={application._id} className='border-b border-white/20'>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={application.company_logo || "logo"}
                                                    alt="logo"

                                                />

                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{application.company}</div>
                                            <div className="text-sm opacity-50">{application.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {application.title}
                                </td>
                                <td>{application.time}</td>
                                <td>{application.aplocationCount}</td>
                                <th>
                                    <Link to={`/viewApplication/${application._id}`}>
                                        <button className="btn  btn-xs">Show Application</button>
                                    </Link>
                                </th>
                            </tr>
                        )
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyPost;
