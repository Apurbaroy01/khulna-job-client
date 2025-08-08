
import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

import job1 from '../../assets/job1.png';
import job2 from '../../assets/job2.png';
import { motion } from "framer-motion";

const AllJobs = () => {
    const loderJob = useLoaderData([]);
    const [jobs] = useState(loderJob);

    return (
        <div>
            <div className="hero mt-15 px-6 text-white">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-10">


                    {/* Animated Images */}
                    <div className='flex-1 relative flex justify-center items-center gap-4 '>
                        <motion.img
                            src={job1}
                            animate={{ y: [-50, 5, -50] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="w-64 rounded-tl-3xl shadow-2xl border-l-[6px] border-blue-500"
                        />
                        <motion.img
                            src={job2}
                            animate={{ x: [-50, -5, -50] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="w-64 rounded-br-3xl shadow-2xl border-r-[6px] border-blue-500"
                        />
                    </div>

                    {/* Text Content */}
                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className="text-4xl md:text-5xl font-extrabold ">Find Your Dream Job</h1>
                        <p className="py-6 text-cyan-200 text-lg">
                            Explore thousands of job opportunities in Khulna and beyond. Build your future with the right career!
                        </p>
                        <button className="btn btn-primary btn-lg rounded-full px-8">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
                {jobs.map(job => (
                    <div
                        key={job._id}
                        className="card bg-white/5 border border-white/10 rounded-2xl p-1 shadow-2xl backdrop-blur-md hover:scale-105"
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
                                <p className="text-gray-400 flex items-center gap-1"> <MdLocationOn /> {job.location}</p>
                            </div>
                        </div>

                        {/* Job Details */}
                        <div className="card-body p-3 sm:p-4">
                            <h2 className="card-title text-sm sm:text-base font-bold">{job.title}</h2>
                            <p className="text-xs sm:text-sm text-gray-400">
                                {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2 ">
                                {job.requirements?.map((description, index) => (
                                    <p
                                        key={index}
                                        className="btn btn-xs rounded-full normal-case bg-transparent text-white/80"
                                    >
                                        {description}
                                    </p>
                                ))}
                            </div>

                            <div className="card-actions justify-end mt-2">
                                <p>$ {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency}</p>
                                <Link to={`/job/${job._id}`}>
                                    <button className="btn btn-primary btn-xs sm:btn-sm">More Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllJobs;
