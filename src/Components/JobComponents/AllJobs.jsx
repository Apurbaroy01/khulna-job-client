import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    const loderJob = useLoaderData([]);
    const [jobs] = useState(loderJob);

    return (
        <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jobs.map(job => (
                <div
                    key={job._id}
                    className="card bg-base-100 shadow-sm border rounded-lg hover:shadow-md transition duration-200"
                >
                    {/* Company Info */}
                    <div className="flex items-center gap-3 p-2 sm:p-3 flex-wrap">
                        <img
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            src={job.company_logo}
                            alt={job.company}
                        />
                        <div className="text-xs sm:text-sm">
                            <p className="font-semibold">{job.company}</p>
                            <p className="text-gray-500">{job.location}</p>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="card-body p-3 sm:p-4">
                        <h2 className="card-title text-sm sm:text-base font-bold">{job.title}</h2>
                        <p className="text-xs sm:text-sm text-gray-600">
                            A card component has a figure, a body part, and inside body there are title and actions parts.
                        </p>
                        <div className="card-actions justify-end mt-2">
                            <button className="btn btn-primary btn-xs sm:btn-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllJobs;
