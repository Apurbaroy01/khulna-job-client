import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const loadingJob = useLoaderData();
  const { _id, title, company_logo, company, deadline, location, salary, description } = loadingJob;

  return (
    <div className="min-h-screen bg-transparent p-3 sm:p-6 md:p-10 text-white mt-15">
      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        
        {/* Header: Logo + Title */}
        <div className="flex flex-row sm:flex-row sm:items-center sm:gap-4 ">
          <img 
            src={company_logo} 
            alt="logo" 
            className="w-12 sm:w-16 md:w-20 rounded mb-3 sm:mb-0" 
          />
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">{title}</h2>
        </div>

        {/* Job Info */}
        <div className="space-y-2 text-xs sm:text-sm md:text-base">
          <p><span className="font-semibold">Company:</span> {company}</p>
          <p><span className="font-semibold">Location:</span> {location || "Remote"}</p>
          <p><span className="font-semibold">Salary:</span> {salary || "Negotiable"}</p>
          <p><span className="font-semibold">Deadline:</span> {deadline || "Negotiable"}</p>
        </div>

        {/* Description */}
        <div className="border-t border-white/20 mt-6 pt-4">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
            {description || "No description provided."}
          </p>
        </div>

        {/* Apply Button */}
        <div className="mt-8 flex justify-center sm:justify-end">
          <Link to={`/jobApply/${_id}`} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-xl transition duration-200">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
