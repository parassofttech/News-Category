import { motion } from "framer-motion";

import {
    BrainCircuit,
    Database,
    Code2,
    Server,
    Cpu,
    Sparkles,
    Workflow,
    Target,
    ShieldCheck
} from "lucide-react";


const About = () => {


    const technologies = [

        {
            title:"Frontend",
            icon:<Code2/>,
            items:[
                "React.js",
                "Tailwind CSS",
                "Framer Motion",
                "React Router"
            ]
        },


        {
            title:"Backend",
            icon:<Server/>,
            items:[
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST API"
            ]
        },


        {
            title:"Machine Learning",
            icon:<Cpu/>,
            items:[
                "Python",
                "Scikit Learn",
                "TF-IDF",
                "Naive Bayes"
            ]
        }


    ];



    const workflow = [

        {
            step:"01",
            title:"News Input",
            text:"User enters any news article for classification."
        },


        {
            step:"02",
            title:"Text Processing",
            text:"Text cleaning, tokenization and feature extraction."
        },


        {
            step:"03",
            title:"ML Prediction",
            text:"Machine Learning model analyzes patterns."
        },


        {
            step:"04",
            title:"Result",
            text:"Category and confidence score generated."
        }


    ];



    return (

        <section className="min-h-screen bg-linear-to-br from-slate-950/90 via-emerald-950/80 to-slate-950/90 py-20">


            <div className="max-w-7xl mx-auto px-6">



                {/* Hero */}


                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    className="text-center max-w-4xl mx-auto"

                >


                    <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300">


                        <Sparkles size={20}/>

                        Artificial Intelligence Project


                    </div>



                    <h1 className="text-5xl md:text-7xl font-black text-white mt-8">


                        About

                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">

                            NewsAI

                        </span>


                    </h1>



                    <p className="text-gray-400 text-lg leading-8 mt-8">


                        NewsAI is an advanced News Category Classification
                        system that uses Artificial Intelligence and Machine
                        Learning to automatically identify the category of
                        news articles.


                    </p>


                </motion.div>





                {/* Overview */}


                <div className="grid lg:grid-cols-2 gap-10 mt-20">



                    <InfoCard

                        icon={<BrainCircuit/>}

                        title="AI Powered Classification"

                        text="The system uses Natural Language Processing and Machine Learning algorithms to understand news content and predict categories."

                    />



                    <InfoCard

                        icon={<Target/>}

                        title="High Accuracy Prediction"

                        text="The trained model uses TF-IDF vectorization and Multinomial Naive Bayes algorithm for efficient classification."

                    />



                </div>






                {/* Workflow */}


                <div className="mt-24">


                    <div className="flex items-center gap-3 mb-12">


                        <Workflow className="text-cyan-400"/>


                        <h2 className="text-4xl font-bold text-white">

                            How It Works

                        </h2>


                    </div>




                    <div className="grid md:grid-cols-4 gap-8">


                        {

                            workflow.map((item,index)=>(


                                <motion.div

                                whileHover={{
                                    y:-10
                                }}

                                key={index}

                                className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-7"

                                >


                                    <div className="text-5xl font-black text-cyan-400">

                                        {item.step}

                                    </div>


                                    <h3 className="text-white text-xl font-bold mt-6">

                                        {item.title}

                                    </h3>


                                    <p className="text-gray-400 mt-4 leading-7">

                                        {item.text}

                                    </p>


                                </motion.div>


                            ))

                        }


                    </div>


                </div>






                {/* Technology */}


                <div className="mt-24">


                    <h2 className="text-4xl font-bold text-white mb-12">


                        Technology Stack


                    </h2>



                    <div className="grid lg:grid-cols-3 gap-8">


                    {

                        technologies.map((tech,index)=>(


                            <motion.div

                            whileHover={{
                                scale:1.05
                            }}

                            key={index}

                            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"

                            >


                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">

                                    {tech.icon}

                                </div>



                                <h3 className="text-white text-2xl font-bold mt-6">

                                    {tech.title}

                                </h3>



                                <ul className="mt-5 space-y-3">


                                {

                                    tech.items.map((item,i)=>(


                                        <li

                                        key={i}

                                        className="text-gray-400 flex items-center gap-2"

                                        >

                                            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>

                                            {item}


                                        </li>


                                    ))

                                }


                                </ul>


                            </motion.div>


                        ))

                    }


                    </div>


                </div>







                {/* ML Details */}


                <div className="mt-24 rounded-[35px] bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 p-10">


                    <div className="grid lg:grid-cols-3 gap-8">


                        <Detail

                            icon={<Database/>}

                            title="Dataset"

                            text="BBC News dataset containing multiple categories like Sports, Business, Politics, Technology and Entertainment."

                        />



                        <Detail

                            icon={<Cpu/>}

                            title="Model"

                            text="Multinomial Naive Bayes classifier trained with TF-IDF text features."

                        />



                        <Detail

                            icon={<ShieldCheck/>}

                            title="Security"

                            text="Backend APIs validate requests and maintain prediction history securely."

                        />



                    </div>


                </div>



            </div>


        </section>

    );

};





const InfoCard = ({
    icon,
    title,
    text
})=>{


    return (

        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">


            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">

                {icon}

            </div>


            <h2 className="text-2xl font-bold text-white mt-6">

                {title}

            </h2>


            <p className="text-gray-400 leading-8 mt-4">

                {text}

            </p>


        </div>

    )

}





const Detail = ({
    icon,
    title,
    text
})=>{


    return(

        <div>


            <div className="text-cyan-400">

                {icon}

            </div>


            <h3 className="text-white text-xl font-bold mt-4">

                {title}

            </h3>


            <p className="text-gray-400 mt-3 leading-7">

                {text}

            </p>


        </div>

    )

}



export default About;