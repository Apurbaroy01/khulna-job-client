import { useContext, useEffect, useState } from "react";
import AuthConText from "../../Firebase/Context/AuthConText";
import axios from "axios";



const Application = () => {
    const [application, setApplication] = useState([])
    const { user } = useContext(AuthConText);

    useEffect(() => {
        if (user?.email) {
            // fetch(`http://localhost:5000/Application-jobs?email=${user.email}`)
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //         setApplication(data);
            //     })
            //     .catch(error => {
            //         console.error('Error fetching application jobs:', error);
            //     });

            axios.get(`http://localhost:5000/Application-jobs?email=${user.email}`,{
                withCredentials: true
            })
                .then(res => {
                    console.log(res.data);
                    setApplication(res.data);
                })
                
        }
    }, [user?.email]);

    return (
        <div className="overflow-x-auto w-11/12 mx-auto mt-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-2 text-white">
            <table className="table text-white">
                {/* head */}
                <thead className="border-b-2 text-white">
                    <tr>

                        <th>Name</th>
                        <th>Job</th>
                        <th>Time & Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        application.map(application =>
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
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Active🔴</span>
                                </td>
                                <td>{application.applied_at}</td>
                                <td>{application.status}</td>
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

export default Application;