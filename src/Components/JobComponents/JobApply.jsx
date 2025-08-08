import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthConText from "../../Firebase/Context/AuthConText";




const JobApply = () => {
    const { id } = useParams();
    const { user } = useContext(AuthConText)

    // console.log(id, user.email);


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
    console.log(appliedAt);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            applied_at: appliedAt,
            linkedin,
            github,
            resume,
        }

        console.log(jobApplication)

        fetch('http://localhost:5000/Application-jobs',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset();
        });
    };

    return (
        <div className="hero bg-transparent min-h-screen text-white">
            <div className="hero-content flex-col w-full px-4">


                {/* Container */}
                <div className="bg-white/5 backdrop-blur-md w-full max-w-4xl shadow-2xl p-8 rounded-lg">
                    <div className="text-center lg:text-left  w-full">
                        <h1 className="text-5xl font-bold text-center">Apply Now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <fieldset>
                                <label className="label text-white">LinkedIn</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="LinkedIn"
                                    name="linkedin"
                                />
                            </fieldset>

                            <fieldset>
                                <label className="label text-white">GitHub</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="GitHub"
                                    name="github"
                                />
                            </fieldset>

                            <fieldset>
                                <label className="label text-white">Resume</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="Resume"
                                    name="resume"
                                />
                            </fieldset>

                            <button type="submit" className="btn btn-primary mt-4 w-full">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
