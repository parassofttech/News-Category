import {
    FileText,
    BrainCircuit,
    UserCheck,
    AlertTriangle,
    Copyright,
    Scale,
    ShieldCheck
} from "lucide-react";

import { motion } from "framer-motion";


const Terms = () => {


    const terms = [

        {
            icon:<UserCheck/>,

            title:"User Responsibilities",

            content:
            "Users agree to provide accurate information and use NewsAI only for legal and educational purposes. Any misuse of the platform is prohibited."
        },


        {
            icon:<BrainCircuit/>,

            title:"AI Prediction Disclaimer",

            content:
            "NewsAI uses Machine Learning algorithms to predict news categories. Predictions are generated automatically and may not always be 100% accurate."
        },


        {
            icon:<ShieldCheck/>,

            title:"Acceptable Usage",

            content:
            "Users must not attempt to damage, overload, reverse engineer, or misuse the application, APIs, or machine learning model."
        },


        {
            icon:<Copyright/>,

            title:"Intellectual Property",

            content:
            "The design, source code, AI workflow, and application features of NewsAI are protected intellectual property and cannot be copied without permission."
        },


        {
            icon:<Scale/>,

            title:"Limitation of Liability",

            content:
            "NewsAI is provided as an AI assistance tool. We are not responsible for decisions made solely based on automated predictions."
        },


        {
            icon:<AlertTriangle/>,

            title:"Service Changes",

            content:
            "We reserve the right to update, modify, or improve the application features, AI models, and services whenever required."
        }

    ];



    return (

        <section className="
        min-h-screen
        bg-linear-to-br
        from-slate-950
        via-slate-900
        to-black
        py-20
        ">


            <div className="max-w-5xl mx-auto px-6">





                {/* Header */}



                <motion.div

                initial={{
                    opacity:0,
                    y:40
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                className="text-center mb-16"

                >



                    <div className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    bg-purple-500/20
                    border
                    border-purple-400
                    text-purple-300
                    ">


                        <FileText size={20}/>


                        Terms & Conditions


                    </div>






                    <h1 className="
                    text-5xl
                    md:text-6xl
                    font-black
                    text-white
                    mt-8
                    ">


                        Terms of

                        <span className="
                        block
                        text-transparent
                        bg-clip-text
                        bg-linear-to-r
                        from-cyan-400
                        to-purple-500
                        ">

                            Service

                        </span>


                    </h1>





                    <p className="
                    text-gray-400
                    text-lg
                    leading-8
                    mt-6
                    ">


                        Please read these terms carefully before using
                        NewsAI. By accessing this platform, you agree
                        to follow these conditions.


                    </p>


                </motion.div>








                {/* Terms Cards */}



                <div className="space-y-8">


                {

                    terms.map((item,index)=>(


                        <motion.div

                        key={index}

                        initial={{
                            opacity:0,
                            y:30
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        transition={{
                            delay:index*0.1
                        }}


                        className="
                        rounded-3xl
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-xl
                        p-8
                        hover:border-cyan-400
                        transition
                        "

                        >



                            <div className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-purple-500/20
                            flex
                            items-center
                            justify-center
                            text-purple-400
                            ">


                                {item.icon}


                            </div>






                            <h2 className="
                            text-2xl
                            text-white
                            font-bold
                            mt-6
                            ">


                                {item.title}


                            </h2>






                            <p className="
                            text-gray-400
                            mt-4
                            leading-8
                            ">


                                {item.content}


                            </p>



                        </motion.div>


                    ))

                }


                </div>









                {/* AI Usage Section */}



                <div className="
                mt-12
                rounded-3xl
                bg-linear-to-r
                from-cyan-500/10
                to-purple-500/10
                border
                border-white/10
                p-8
                ">


                    <h2 className="
                    text-3xl
                    font-bold
                    text-white
                    flex
                    items-center
                    gap-3
                    ">


                        <BrainCircuit className="text-cyan-400"/>


                        AI Usage Guidelines


                    </h2>




                    <ul className="
                    mt-6
                    space-y-4
                    text-gray-300
                    ">


                        <li>

                            ✓ Do not use the system for spreading false information.

                        </li>


                        <li>

                            ✓ Always verify important news from trusted sources.

                        </li>


                        <li>

                            ✓ AI predictions should be considered as assistance only.

                        </li>


                        <li>

                            ✓ Respect privacy and responsible AI usage.

                        </li>


                    </ul>


                </div>








                {/* Agreement */}



                <div className="
                mt-10
                text-center
                text-gray-500
                ">


                    Last Updated: July 2026


                </div>





            </div>


        </section>

    );

};


export default Terms;