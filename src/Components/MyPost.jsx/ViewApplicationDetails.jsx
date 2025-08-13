import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewApplicationDetails = () => {
    const applicant = useLoaderData();
    console.log(applicant);

    return (
        <div className="w-11/12 mt-5 mx-auto bg-white shadow-xl rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Applicant Details</h2>
                <p className="text-sm opacity-90">
                    Applied for Job ID: <span className="font-semibold">{applicant.job_id}</span>
                </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
                {/* Email */}
                <div className="flex items-center text-gray-700">
                    <FaEnvelope className="text-blue-500 mr-3 text-lg" />
                    <span>{applicant.applicant_email}</span>
                </div>

                {/* Applied Date */}
                <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="text-green-500 mr-3 text-lg" />
                    <span>{applicant.applied_at}</span>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center text-gray-700">
                    <FaLinkedin className="text-blue-700 mr-3 text-lg" />
                    {applicant.linkedin?.startsWith("http") ? (
                        <a 
                            href={applicant.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-blue-600"
                        >
                            {applicant.linkedin}
                        </a>
                    ) : (
                        <span>{applicant.linkedin}</span>
                    )}
                </div>

                {/* GitHub */}
                <div className="flex items-center text-gray-700">
                    <FaGithub className="text-gray-900 mr-3 text-lg" />
                    {applicant.github?.startsWith("http") ? (
                        <a 
                            href={applicant.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-gray-800"
                        >
                            {applicant.github}
                        </a>
                    ) : (
                        <span>{applicant.github}</span>
                    )}
                </div>

                {/* Resume */}
                <div className="flex items-center text-gray-700">
                    <FaFileAlt className="text-purple-500 mr-3 text-lg" />
                    {applicant.resume?.startsWith("http") ? (
                        <a 
                            href={applicant.resume} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline text-purple-600 font-medium"
                        >
                            View Resume
                        </a>
                    ) : (
                        <span>{applicant.resume}</span>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t">
                <p className="text-xs text-gray-500">
                    Application ID: {applicant._id}
                </p>
            </div>
        </div>
    );
};

export default ViewApplicationDetails;
