import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewApplicationDetails = () => {
    const applicant = useLoaderData();

    return (
        <div className="w-11/12 max-w-xl mt-15 mx-auto bg-white shadow-xl rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-4">
                <h2 className="text-xl sm:text-2xl font-bold">Applicant Details</h2>
                <p className="text-xs sm:text-sm opacity-90">
                    Applied for Job ID: <span className="font-semibold">{applicant.job_id}</span>
                </p>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Email */}
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaEnvelope className="text-blue-500 mr-2 sm:mr-3 text-base sm:text-lg" />
                    <span>{applicant.applicant_email}</span>
                </div>

                {/* Applied Date */}
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaCalendarAlt className="text-green-500 mr-2 sm:mr-3 text-base sm:text-lg" />
                    <span>{applicant.applied_at}</span>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaLinkedin className="text-blue-700 mr-2 sm:mr-3 text-base sm:text-lg" />
                    {applicant.linkedin?.startsWith("http") ? (
                        <a 
                            href={applicant.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-blue-600 break-all"
                        >
                            {applicant.linkedin}
                        </a>
                    ) : (
                        <span>{applicant.linkedin}</span>
                    )}
                </div>

                {/* GitHub */}
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaGithub className="text-gray-900 mr-2 sm:mr-3 text-base sm:text-lg" />
                    {applicant.github?.startsWith("http") ? (
                        <a 
                            href={applicant.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-gray-800 break-all"
                        >
                            {applicant.github}
                        </a>
                    ) : (
                        <span>{applicant.github}</span>
                    )}
                </div>

                {/* Resume */}
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                    <FaFileAlt className="text-purple-500 mr-2 sm:mr-3 text-base sm:text-lg" />
                    {applicant.resume?.startsWith("http") ? (
                        <a 
                            href={applicant.resume} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-purple-600 font-medium break-all"
                        >
                            View Resume
                        </a>
                    ) : (
                        <span>{applicant.resume}</span>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 sm:px-6 py-2 border-t">
                <p className="text-xs sm:text-sm text-gray-500 break-all">
                    Application ID: {applicant._id}
                </p>
            </div>
        </div>
    );
};

export default ViewApplicationDetails;
