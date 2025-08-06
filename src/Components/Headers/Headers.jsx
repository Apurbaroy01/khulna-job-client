import job1 from '../../assets/job1.png';
import job2 from '../../assets/job2.png';
import { motion } from "framer-motion";

const Headers = () => {
    return (
        <div className="hero mt-15 px-6 text-white">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-10">
                

                {/* Animated Images */}
                <div className='flex-1 relative flex justify-center items-center gap-4 '>
                    <motion.img
                        src={job1}
                        animate={{ y: [-50, 5, -50] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-64 rounded-tl-3xl shadow-2xl border-l-[6px] border-blue-500"
                    />
                    <motion.img
                        src={job2}
                        animate={{ x: [-50, -5, -50] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-64 rounded-br-3xl shadow-2xl border-r-[6px] border-blue-500"
                    />
                </div>

                {/* Text Content */}
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className="text-4xl md:text-5xl font-extrabold ">Find Your Dream Job</h1>
                    <p className="py-6 text-cyan-200 text-lg">
                        Explore thousands of job opportunities in Khulna and beyond. Build your future with the right career!
                    </p>
                    <button className="btn btn-primary btn-lg rounded-full px-8">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Headers;
