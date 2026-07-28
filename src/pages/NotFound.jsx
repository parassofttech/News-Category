import { 
    AlertCircle,
    Home,
    ArrowLeft,
    BrainCircuit
} from "lucide-react";

import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";


const NotFound = () => {


    const navigate = useNavigate();



    return (

        <section className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-linear-to-br
        from-slate-950
        via-slate-900
        to-black
        px-6
        ">


            <motion.div

            initial={{
                opacity:0,
                scale:0.8
            }}

            animate={{
                opacity:1,
                scale:1
            }}

            className="
            max-w-xl
            w-full
            text-center
            rounded-[40px]
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            p-10
            "


            >




                {/* Icon */}



                <motion.div

                animate={{
                    rotate:[0,10,-10,0]
                }}

                transition={{
                    duration:2,
                    repeat:Infinity
                }}

                className="
                mx-auto
                w-24
                h-24
                rounded-3xl
                bg-red-500/20
                flex
                items-center
                justify-center
                "

                >


                    <AlertCircle

                    size={55}

                    className="text-red-400"

                    />


                </motion.div>








                {/* Error Code */}



                <h1 className="
                text-8xl
                md:text-9xl
                font-black
                text-transparent
                bg-clip-text
                bg-linear-to-r
                from-cyan-400
                to-purple-500
                mt-8
                ">


                    404


                </h1>








                <h2 className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                mt-5
                ">


                    Page Not Found


                </h2>







                <p className="
                text-gray-400
                mt-5
                leading-8
                ">


                    Looks like this AI prediction page
                    doesn't exist. The requested route
                    could not be found.


                </p>







                {/* AI Message */}



                <div className="
                mt-8
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-400/20
                p-5
                flex
                items-center
                gap-4
                text-left
                ">


                    <BrainCircuit

                    className="text-cyan-400"

                    size={35}

                    />


                    <p className="text-gray-300">


                        AI Suggestion:
                        Try returning to the dashboard
                        and continue your news analysis.


                    </p>


                </div>








                {/* Buttons */}



                <div className="
                flex
                flex-col
                sm:flex-row
                gap-5
                mt-10
                ">





                    <Link

                    to="/"

                    className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-3
                    bg-linear-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    font-bold
                    py-4
                    rounded-xl
                    hover:scale-105
                    transition
                    "

                    >


                        <Home size={20}/>


                        Go Home


                    </Link>








                    <button

                    onClick={()=>navigate(-1)}

                    className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-3
                    bg-white/10
                    border
                    border-white/10
                    text-white
                    font-bold
                    py-4
                    rounded-xl
                    hover:bg-white/20
                    transition
                    "

                    >


                        <ArrowLeft size={20}/>


                        Go Back


                    </button>





                </div>





            </motion.div>


        </section>

    );

};


export default NotFound;