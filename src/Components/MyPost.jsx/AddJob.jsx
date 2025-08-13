import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";



const AddJob = () => {
    const { user } = UseAuth();
    const now = new Date();
    const appliedAt = now.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour12: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const company = form.companyName.value;
        const title = form.jobTitle.value;
        const location = form.jobLocation.value;
        const company_logo = form.companyUrl.value;
        const jobType = form.jobType.value;
        const category = form.jobField.value;
        const currency = form.currency.value;
        const min = form.salaryMin.value;
        const max = form.salaryMax.value;
        const hrEmail = form.hrEmail.value;

        const requirementsArray = form.requirements.value
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item);

        const responsibilitiesArray = form.responsibilities.value
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item);

        const salaryRange = { min, max, currency };



        const data = {
            company,
            title,
            location,
            hrEmail,
            company_logo,
            jobType,
            category,
            salaryRange,
            requirements: requirementsArray,
            responsibilities: responsibilitiesArray,
            email: user?.email || "",
            time: appliedAt,
        };

        console.log(data);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();

                Swal.fire({
                    title: "Successfull!",
                    icon: "success",
                    draggable: true
                });
            })

    };

    const inputClass =
        "input input-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition";
    const selectClass =
        "select select-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200";
    const textareaClass =
        "textarea textarea-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200";

    return (
        <div className="w-full min-h-screen bg-transparent  from-indigo-50 via-white to-indigo-100 flex justify-center items-center p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-4xl border border-gray-200"
            >
                <h2 className="text-4xl font-bold mb-10 text-purple-500 text-center tracking-tight">
                    🚀 Add New Job
                </h2>

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* Company Name */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company name"
                            className={inputClass}
                        />
                    </div>

                    {/* Job Title */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Job Title
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job title"
                            className={inputClass}
                        />
                    </div>

                    {/* Job Location */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Job Location
                        </label>
                        <input
                            type="text"
                            name="jobLocation"
                            placeholder="Job location"
                            className={inputClass}
                        />
                    </div>

                    {/* HR Email */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            HR Email
                        </label>
                        <input
                            type="email"
                            name="hrEmail"
                            placeholder="HR email"
                            className={inputClass}
                            defaultValue={user?.email || ""}
                            disabled
                        />
                    </div>

                    {/* Company URL */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Company URL
                        </label>
                        <input
                            type="text"
                            name="companyUrl"
                            placeholder="Company website"
                            className={inputClass}
                        />
                    </div>

                    {/* Job Type */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Job Type
                        </label>
                        <select name="jobType" className={selectClass}>
                            <option value="">Select job type</option>
                            <option>Full-Time</option>
                            <option>Intern</option>
                            <option>Part-Time</option>
                        </select>
                    </div>

                    {/* Job Field */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Job Field
                        </label>
                        <select name="jobField" className={selectClass}>
                            <option value="">Select job field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Thinking</option>
                        </select>
                    </div>

                    {/* Currency */}
                    <div>
                        <label className="block font-semibold text-white mb-1">
                            Currency
                        </label>
                        <select name="currency" className={selectClass}>
                            <option value="">Select currency</option>
                            <option>USD</option>
                            <option>BDT</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    {/* Salary Range */}
                    <div className="w-full md:col-span-2">
                        <label className="block font-semibold text-white mb-1">
                            Salary Range
                        </label>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <input
                                type="text"
                                name="salaryMin"
                                placeholder="Min"
                                className={inputClass}
                            />
                            <input
                                type="text"
                                name="salaryMax"
                                placeholder="Max"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Job Requirements */}
                    <div className="md:col-span-1">
                        <label className="block font-semibold text-white mb-1">
                            Job Requirements
                        </label>
                        <textarea
                            name="requirements"
                            className={textareaClass}
                            placeholder="Write each requirement on a new line"
                        ></textarea>
                    </div>

                    {/* Responsibilities */}
                    <div className="md:col-span-1">
                        <label className="block font-semibold text-white mb-1">
                            Responsibilities
                        </label>
                        <textarea
                            name="responsibilities"
                            className={textareaClass}
                            placeholder="Write each responsibility on a new line"
                        ></textarea>
                    </div>
                </fieldset>

                {/* Submit Button */}
                <button className="btn btn-primary w-full mt-5">Submit job</button>
            </form>
        </div>
    );
};

export default AddJob;
