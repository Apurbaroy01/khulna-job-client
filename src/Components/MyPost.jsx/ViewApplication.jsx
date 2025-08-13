import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const loaderApplication = useLoaderData()
    console.log(loaderApplication);
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
                                <td>Acction</td>
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