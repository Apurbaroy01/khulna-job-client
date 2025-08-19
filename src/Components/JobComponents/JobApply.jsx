import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useContext(AuthConText);

    const now = new Date();
    const appliedAt = now.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            applied_at: appliedAt,
            linkedin,
            github,
            resume,
        };

        fetch('http://localhost:5000/Application-jobs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
                Swal.fire({
                    title: "Successful!",
                    icon: "success",
                    draggable: true
                });
            });
    };

    return (
        <div className="hero bg-transparent min-h-screen text-white px-3 sm:px-6 py-6">
            <div className="hero-content flex-col w-full">

                {/* Container */}
                <div className="bg-white/5 backdrop-blur-md w-full max-w-lg sm:max-w-2xl md:max-w-4xl shadow-xl p-4 sm:p-6 md:p-8 rounded-xl">
                    
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6">
                        Apply Now!
                    </h1>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 text-sm sm:text-base">
                        <fieldset>
                            <label className="label text-white text-xs sm:text-sm">LinkedIn</label>
                            <input
                                type="text"
                                className="input input-bordered w-full text-xs sm:text-sm py-2 sm:py-3"
                                placeholder="Enter LinkedIn profile"
                                name="linkedin"
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <label className="label text-white text-xs sm:text-sm">GitHub</label>
                            <input
                                type="text"
                                className="input input-bordered w-full text-xs sm:text-sm py-2 sm:py-3"
                                placeholder="Enter GitHub profile"
                                name="github"
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <label className="label text-white text-xs sm:text-sm">Resume Link</label>
                            <input
                                type="url"
                                className="input input-bordered w-full text-xs sm:text-sm py-2 sm:py-3"
                                placeholder="Paste Resume (Google Drive / Link)"
                                name="resume"
                                required
                            />
                        </fieldset>

                        <button 
                            type="submit" 
                            className="btn btn-primary mt-4 w-full py-2 sm:py-3 text-sm sm:text-base"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
