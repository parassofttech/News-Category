import { 
    Mail,
    User,
    MessageSquare,
    Send,
   
    MapPin,
    Sparkles
} from "lucide-react";

import {  FaGithub, FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import { motion } from "framer-motion";


const Contact = () => {


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        subject:"",
        message:""

    });



    const handleChange = (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit = (e)=>{

        e.preventDefault();


        console.log(formData);


        alert(
            "Message Sent Successfully 🚀"
        );


        setFormData({

            name:"",
            email:"",
            subject:"",
            message:""

        });


    };




    return (

        <section className="min-h-screen bg-linear-to-br from-slate-950/90 via-emerald-950/80 to-slate-950/90 py-20">


            <div className="max-w-7xl mx-auto px-6">



                {/* Heading */}


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


                    <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300">


                        <Sparkles size={20}/>


                        Contact NewsAI Team


                    </div>



                    <h1 className="text-5xl md:text-6xl font-black text-white mt-8">


                        Let's Build Something

                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">

                            Intelligent Together

                        </span>


                    </h1>



                    <p className="text-gray-400 mt-6 text-lg">


                        Have questions, suggestions or ideas?
                        Feel free to contact us.


                    </p>



                </motion.div>






                <div className="grid lg:grid-cols-2 gap-12">





                    {/* Contact Form */}



                    <motion.div

                    initial={{
                        opacity:0,
                        x:-40
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"


                    >


                        <h2 className="text-3xl font-bold text-white mb-8">


                            Send Message


                        </h2>



                        <form

                        onSubmit={handleSubmit}

                        className="space-y-6"

                        >




                            <Input

                                icon={<User/>}

                                name="name"

                                placeholder="Your Name"

                                value={formData.name}

                                onChange={handleChange}

                            />



                            <Input

                                icon={<Mail/>}

                                name="email"

                                placeholder="Email Address"

                                value={formData.email}

                                onChange={handleChange}

                            />





                            <Input

                                icon={<MessageSquare/>}

                                name="subject"

                                placeholder="Subject"

                                value={formData.subject}

                                onChange={handleChange}

                            />





                            <textarea

                            name="message"

                            value={formData.message}

                            onChange={handleChange}

                            placeholder="Your Message"

                            rows="5"

                            className="
                            w-full
                            bg-slate-900
                            border
                            border-white/10
                            rounded-xl
                            p-5
                            text-white
                            outline-none
                            focus:border-cyan-400
                            "

                            />






                            <button

                            className="
                            w-full
                            flex
                            justify-center
                            items-center
                            gap-3
                            bg-lineaar-to-r
                            from-cyan-500
                            to-blue-600
                            hover:scale-105
                            transition
                            text-white
                            font-bold
                            py-4
                            rounded-xl
                            "

                            >


                                <Send size={20}/>


                                Send Message


                            </button>




                        </form>


                    </motion.div>









                    {/* Information */}



                    <motion.div

                    initial={{
                        opacity:0,
                        x:40
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    className="space-y-8"

                    >





                        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">


                            <h2 className="text-3xl text-white font-bold">

                                Developer

                            </h2>



                            <p className="text-gray-400 mt-5 leading-8">


                                NewsAI is developed using modern web technologies
                                and Machine Learning algorithms to provide
                                accurate news classification.


                            </p>




                            <div className="mt-8 space-y-5">



                                <Info

                                    icon={<Mail/>}

                                    text="contact@newsai.com"

                                />


                                <Info

                                    icon={<MapPin/>}

                                    text="India"

                                />


                            </div>



                        </div>









                        {/* Social */}



                        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">


                            <h2 className="text-2xl font-bold text-white">


                                Connect With Us


                            </h2>




                            <div className="flex gap-5 mt-8">



                                <Social

                                    icon={<FaGithub/>}

                                    text="Github"

                                />



                                <Social

                                    icon={<FaLinkedin/>}

                                    text="LinkedIn"

                                />



                            </div>


                        </div>








                        {/* CTA */}



                        <div className="rounded-3xl bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 p-8">


                            <h3 className="text-2xl font-bold text-white">


                                Improve AI With Us 🚀


                            </h3>


                            <p className="text-gray-300 mt-4">


                                Share feedback and help us make the
                                classification model better.


                            </p>


                        </div>



                    </motion.div>




                </div>


            </div>


        </section>

    );

};







const Input = ({
    icon,
    name,
    placeholder,
    value,
    onChange
})=>{


    return(

        <div className="relative">


            <div className="absolute left-4 top-4 text-gray-400">


                {icon}


            </div>


            <input

            name={name}

            value={value}

            onChange={onChange}

            placeholder={placeholder}

            className="
            w-full
            bg-slate-900
            border
            border-white/10
            rounded-xl
            py-4
            pl-12
            pr-5
            text-white
            outline-none
            focus:border-cyan-400
            "

            />


        </div>

    )

}








const Info = ({
    icon,
    text
})=>(

    <div className="flex items-center gap-4 text-gray-300">


        <div className="text-cyan-400">

            {icon}

        </div>


        {text}


    </div>

)








const Social = ({
    icon,
    text
})=>(

    <button

    className="
    flex
    items-center
    gap-3
    px-5
    py-3
    rounded-xl
    bg-white/5
    border
    border-white/10
    text-white
    hover:bg-cyan-500/20
    transition
    "

    >

        {icon}

        {text}


    </button>

)



export default Contact;