import {
    ShieldCheck,
    Database,
    Lock,
    BrainCircuit,
    UserCheck,
    FileText
} from "lucide-react";

import { motion } from "framer-motion";


const PrivacyPolicy = () => {


    const sections = [

        {
            icon:<Database/>,
            title:"Information We Collect",

            content:
            "We collect information provided by users while using NewsAI such as news articles submitted for prediction, prediction results, and basic interaction data required to improve the application."
        },


        {
            icon:<BrainCircuit/>,
            title:"Machine Learning Data Usage",

            content:
            "News articles submitted for classification are processed by our Artificial Intelligence model. The system analyzes text patterns using Natural Language Processing techniques and does not use personal information for model prediction."
        },


        {
            icon:<Lock/>,
            title:"Data Security",

            content:
            "We implement security practices to protect user information. Backend APIs validate requests and database access is controlled to prevent unauthorized usage."
        },


        {
            icon:<UserCheck/>,
            title:"User Rights",

            content:
            "Users have the right to request information about stored data and can request deletion of their prediction history whenever required."
        },


        {
            icon:<FileText/>,
            title:"Third Party Services",

            content:
            "We may use trusted technologies and services for hosting, analytics, and application improvement. These services follow their own privacy policies."
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
                    bg-green-500/20
                    border
                    border-green-400
                    text-green-300
                    ">


                        <ShieldCheck size={20}/>

                        Privacy & Security


                    </div>




                    <h1 className="
                    text-5xl
                    md:text-6xl
                    font-black
                    text-white
                    mt-8
                    ">


                        Privacy

                        <span className="
                        block
                        text-transparent
                        bg-clip-text
                        bg-linear-to-r
                        from-cyan-400
                        to-purple-500
                        ">

                            Policy

                        </span>


                    </h1>




                    <p className="
                    text-gray-400
                    text-lg
                    mt-6
                    leading-8
                    ">


                        Your privacy is important to us.
                        This policy explains how NewsAI collects,
                        uses and protects your information.


                    </p>


                </motion.div>









                {/* Policy Cards */}



                <div className="space-y-8">


                {

                    sections.map((section,index)=>(


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
                            bg-cyan-500/20
                            flex
                            items-center
                            justify-center
                            text-cyan-400
                            ">


                                {section.icon}


                            </div>





                            <h2 className="
                            text-2xl
                            font-bold
                            text-white
                            mt-6
                            ">


                                {section.title}


                            </h2>





                            <p className="
                            text-gray-400
                            leading-8
                            mt-4
                            ">


                                {section.content}


                            </p>




                        </motion.div>


                    ))

                }


                </div>









                {/* Additional Information */}



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
                    ">


                        AI Transparency


                    </h2>




                    <p className="
                    text-gray-300
                    leading-8
                    mt-5
                    ">


                        NewsAI uses Machine Learning algorithms including
                        TF-IDF feature extraction and Multinomial Naive Bayes
                        classification. The model analyzes the content of news
                        articles only to predict categories such as Sports,
                        Business, Technology, Politics and Entertainment.


                    </p>


                </div>








                {/* Update */}



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


export default PrivacyPolicy;