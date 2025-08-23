import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion";
import job1 from '../../assets/job1.png';
import job2 from '../../assets/job2.png';
import UseJobs from '../Hooks/UseJobs';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

const AllJobs = () => {
    const [sort, settSort] = useState(false)
    const [search, setSearch] = useState("")
    const [currentpage, setCurrentPage] = useState(0);
    const [itemPage, setItemPage] = useState(8);
    const { jobs, loading } = UseJobs(sort, search, currentpage, itemPage);

    const { count } = useLoaderData();


    
    const numberOfPage = Math.ceil(count / itemPage);
    const page = [...Array(numberOfPage).keys()]
    console.log(page)


    const handleNextpage = () => {
        if (currentpage < page.length) {
            setCurrentPage(currentpage + 1)
        }
    };

    const handlePreviousPage = () => {
        if (currentpage > 0) {
            setCurrentPage(currentpage - 1)
        }
    };




    if (loading) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }


    return (
        <div>
            {/* Hero Section */}
            <div className="hero mt-15 px-4 sm:px-6 text-white">
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
                        <h1 className="text-2xl xs:text-xl sm:text-xl md:text-5xl font-extrabold leading-tight">
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
            {/* ----------------------- */}

            <div className="w-11/12 mx-auto p-4 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg">
                <div className="flex  items-center sm:items-stretch justify-between gap-3 sm:gap-4">

                    {/* Search Box */}
                    <label className="flex items-center gap-2 w-full sm:w-1/2 bg-white/10 rounded-xl px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                        <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input
                            type="search"
                            onChange={(e) => setSearch(e.target.value)}
                            required
                            placeholder="Search location..."
                            className="w-full text-xs bg-transparent outline-none placeholder:text-gray-400 text-gray-200"
                        />
                    </label>

                    {/* Button */}
                    <button
                        onClick={() => settSort(!sort)}
                        className={`w-full sm:w-auto text-xs px-2 py-2 rounded-xl font-medium transition-all shadow-md ${sort
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90"
                            : "bg-white/10 text-gray-200 hover:bg-white/20"
                            }`}
                    >
                        {sort ? "Sorted By Salary" : "Sort By Salary"}
                    </button>
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
            <div className='w-11/12 mx-auto flex justify-center gap-2 mt-10'>
                

                <button onClick={handlePreviousPage} className='btn btn-accent'><FaAnglesLeft /></button>
                {
                    page.map(page =>
                        <button
                            key={page}
                            className='btn'
                            onClick={() => setCurrentPage(page)}
                        >{page + 1}</button>
                    )
                }
                <button onClick={handleNextpage} className='btn btn-accent'><FaAnglesRight /></button>
            </div>
        </div>
    );
};

export default AllJobs;
