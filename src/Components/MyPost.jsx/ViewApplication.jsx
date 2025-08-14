import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const loaderApplication = useLoaderData()
    console.log(loaderApplication);

    const handleStatus = (e, id) => {
        const data = {
            status: e.target.value
        }
        console.log(data,id);

        fetch(`http://localhost:5000/Application-jobs/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        } ,[])
        .then(res => res.json())
        .then(data => {
            console.log(data);
    })

        
    }
    return (
        <div className="overflow-x-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-2 text-white w-11/12 mx-auto mt-10">
            <table className="table">
                {/* head */}
                <thead className='text-white border-b-2'>
                    <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loaderApplication.map((application, index) =>
                            <tr key={application._id} className='border-b border-white/20'>
                                <th>{index + 1}</th>
                                <td>{application.applicant_email}</td>
                                <td>{application.applied_at}</td>
                                <td>
                                    <select
                                        onChange={(e)=>handleStatus(e, application._id,)}
                                        defaultValue={application.status}
                                        className=" select-sm bg-gradient-to-r p-2 from-blue-500 to-indigo-500 text-black font-medium rounded-lg border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                        <option disabled={true}>Change Status</option>
                                        <option>Hire</option>
                                        <option>Panding</option>
                                        <option>Decline</option>
                                    </select>
                                </td>
                                <td>
                                    <Link to={`/viewApplicationDetails/${application._id}`}>
                                        <button className='btn '>View</button>
                                    </Link>
                                </td>
                            </tr>

                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ViewApplication;