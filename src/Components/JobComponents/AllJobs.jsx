import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion";
import job1 from '../../assets/job1.png';
import job2 from '../../assets/job2.png';

const AllJobs = () => {
    const loderJob = useLoaderData([]);
    const [jobs] = useState(loderJob);

    return (
        <div>
            {/* Hero Section */}
            <div className="hero mt-10 px-4 sm:px-6 text-white">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-6 sm:gap-10">
                    {/* Animated Images */}
                    <div className='flex-1 relative flex justify-center items-center gap-3 sm:gap-4'>
                        <motion.img
                            src={job1}
                            animate={{ y: [-40, 5, -40] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="w-28 xs:w-36 sm:w-52 md:w-64 rounded-tl-2xl sm:rounded-tl-3xl shadow-xl border-l-[4px] sm:border-l-[6px] border-cyan-400"
                        />
                        <motion.img
                            src={job2}
                            animate={{ x: [-40, -5, -40] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="w-28 xs:w-36 sm:w-52 md:w-64 rounded-br-2xl sm:rounded-br-3xl shadow-xl border-r-[4px] sm:border-r-[6px] border-cyan-400"
                        />
                    </div>

                    {/* Text Content */}
                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                            Find Your <span className="text-cyan-400">Dream Job</span>
                        </h1>
                        <p className="py-3 sm:py-6 text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
                            Explore thousands of job opportunities in Khulna and beyond. Build your future with the right career!
                        </p>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all shadow-lg text-xs sm:text-base">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Jobs Grid */}
            <div className="w-11/12 mx-auto mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {jobs.map(job => (
                    <div
                        key={job._id}
                        className="bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20 flex flex-col"
                    >
                        {/* Company Info */}
                        <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                            <img
                                className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-lg border border-white/10"
                                src={job.company_logo || "/default-logo.png"}
                                alt={job.company}
                            />
                            <div className="text-[10px] xs:text-xs sm:text-sm">
                                <p className="font-semibold text-white truncate">{job.company}</p>
                                <p className="text-gray-400 flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-xs">
                                    <MdLocationOn /> {job.location || "Remote"}
                                </p>
                            </div>
                        </div>

                        {/* Job Details */}
                        <div className="flex-1 p-2 sm:p-4 flex flex-col justify-between">
                            <div>
                                <h2 className="text-sm sm:text-base font-bold text-cyan-300 mb-1 sm:mb-2 truncate">
                                    {job.title}
                                </h2>
                                <p className="text-[9px] xs:text-[11px] sm:text-xs md:text-sm text-gray-300 mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {job.requirements?.slice(0, 2).map((req, index) => (
                                        <span
                                            key={index}
                                            className="px-2 sm:px-3 py-[2px] sm:py-1 text-[8px] xs:text-[10px] sm:text-xs rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                                        >
                                            {req}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Actions */}
                            <div className="mt-2 sm:mt-4 flex items-center justify-between text-[9px] xs:text-[11px] sm:text-sm text-gray-300">
                                <p className="font-medium truncate">
                                    ${job?.salaryRange?.min} - {job?.salaryRange?.max} {job?.salaryRange?.currency}
                                </p>
                                <Link to={`/job/${job._id}`}>
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-2 sm:px-4 py-[2px] sm:py-1 rounded-full text-[8px] xs:text-[10px] sm:text-xs transition-all">
                                        More Details
                                    </button>
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
