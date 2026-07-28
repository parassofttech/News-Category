import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const Loader = () => {

    return (

        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center">

            <div className="text-center">

                <motion.div

                    animate={{
                        rotate:360
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:2,
                        ease:"linear"
                    }}

                    className="mx-auto w-24 h-24 rounded-full border-4 border-cyan-500 border-t-transparent flex items-center justify-center"

                >

                    <BrainCircuit
                        size={42}
                        className="text-cyan-400"
                    />

                </motion.div>

                <motion.h2

                    animate={{
                        opacity:[0.4,1,0.4]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:1.2
                    }}

                    className="text-white text-3xl font-bold mt-8"

                >

                    AI is Analyzing...

                </motion.h2>

                <p className="text-gray-400 mt-3">

                    Please wait while Machine Learning predicts the category.

                </p>

            </div>

        </div>

    );

};

export default Loader;