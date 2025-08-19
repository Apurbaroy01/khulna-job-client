import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";

const AddJob = () => {
  const { user } = UseAuth();
  const now = new Date();
  const appliedAt = now.toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    hour12: true,
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
    const description = form.description.value;

    const requirementsArray = form.requirements.value
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
      description,
      email: user?.email || "",
      time: appliedAt,
    };

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        form.reset();

        Swal.fire({
          title: " Job Added Successfully!",
          icon: "success",
          confirmButtonColor: "#6366f1",
        });
      });
  };

  const inputClass =
    "input input-bordered w-full rounded-lg px-3 py-2 text-sm sm:text-base border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition";
  const selectClass =
    "select select-bordered w-full rounded-lg px-3 py-2 text-sm sm:text-base border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200";
  const textareaClass =
    "textarea textarea-bordered w-full rounded-lg px-3 py-2 text-sm sm:text-base border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200";

  return (
    <div className="w-full min-h-screen bg-transparent flex justify-center items-center p-4 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-2xl border border-gray-200"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-purple-400 text-center">
          🚀 Add New Job
        </h2>

        <fieldset className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Company Name */}
          <div>
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
              HR Email
            </label>
            <input
              type="email"
              name="hrEmail"
              className={inputClass}
              defaultValue={user?.email || ""}
              disabled
            />
          </div>

          {/* Company URL */}
          <div>
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
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
          <div>
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
              Salary Range
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
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
          <div>
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
              Job Requirements
            </label>
            <textarea
              name="requirements"
              className={textareaClass}
              placeholder="Write each requirement on a new line"
              rows={2}
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block font-semibold text-white mb-1 text-sm sm:text-base">
              Description
            </label>
            <textarea
              name="description"
              className={textareaClass}
              placeholder="Write a description"
              rows={2}
            ></textarea>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button className="btn btn-primary w-full mt-6 py-3 text-base sm:text-lg rounded-lg">
          Submit 
        </button>
      </form>
    </div>
  );
};

export default AddJob;
