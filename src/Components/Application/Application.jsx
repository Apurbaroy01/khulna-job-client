import { useContext, useEffect, useState } from "react";
import AuthConText from "../../Firebase/Context/AuthConText";
import useAxios from "../Hooks/UseAxios";
import axios from "axios";
import Swal from "sweetalert2";


// import axios from "axios";




const Application = () => {
    const [application, setApplication] = useState([])
    const { user } = useContext(AuthConText);

    const axiosSorce = useAxios();

    useEffect(() => {
        if (user?.email) {

            axiosSorce.get(`/Application-jobs?email=${user.email}`, {
                withCredentials: true
            })
                .then(res => {
                    console.log(res.data);
                    setApplication(res.data);
                })

        }
    }, [user?.email]);

    const handleDelete = (id) => {
        console.log('delete', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/Application-jobs/${id}`)
                    .then(res => {
                        console.log(res.data)

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });




    }

    return (
        <div className="overflow-x-auto w-11/12 mx-auto mt-20 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-2 text-white">
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
                                <td>
                                    {
                                        application.status && <div className="badge badge-outline badge-info">
                                            {application.status}
                                        </div>
                                    }

                                </td>
                                <th className="flex justify-between">
                                    <button className="btn text-pink-500 btn-xs">Details</button>
                                    <button onClick={() => handleDelete(application._id)} className="btn text-pink-500 btn-xs">❌</button>
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