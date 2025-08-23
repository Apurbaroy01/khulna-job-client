import { Link } from "react-router-dom";
import UseJobs from "../Hooks/UseJobs";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";




const MoreAllJobs = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch]=useState("")
    const { jobs, loading } = UseJobs(sort,search);
    // console.log(sort)


    return (
        <div>
            <div className="mt-20 ">
                <div className="flex justify-center">
                    <h2 className="text-4xl text-white font-bold justify-center">All Jobs</h2>

                </div>

                <div className="w-11/12 mx-auto flex gap-5">
                    <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort === true && "btn-success"}`}>
                        {sort ? 'Shorted By Salary' : 'Short By Salary'}
                    </button>

                    {/* search option */}
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto  sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-20">
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

export default MoreAllJobs;