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
        <div className="overflow-x-auto w-11/12 mx-auto mt-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-2 text-white">
            <table className="table ">
                {/* head */}
                <thead className="border-b-2 text-white">
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Time & date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        job.map(application =>
                            <tr key={application._id}>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={application.company_logo}
                                                    alt="logo" />
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
                                <td>{application.applied_at}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
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
