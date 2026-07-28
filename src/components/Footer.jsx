import {  Mail } from "lucide-react";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (

        <footer className="bg-slate-950 text-gray-300 mt-20">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>

                        <h2 className="text-2xl font-bold text-cyan-400">

                            NewsAI

                        </h2>

                        <p className="mt-4 text-gray-400">

                            AI-powered News Category Classification using
                            Machine Learning, Flask, Node.js and React.

                        </p>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold mb-4">

                            Quick Links

                        </h3>

                        <ul className="space-y-2">

                            <li>Home</li>

                            <li>Predict</li>

                            <li>Dashboard</li>

                            <li>History</li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold mb-4">

                            Connect

                        </h3>

                        <div className="flex gap-4">

                            
                            <FaGithub/>

                            <FaLinkedin />

                            <Mail />

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-gray-500">

                    © {new Date().getFullYear()} NewsAI • All Rights Reserved.

                </div>

            </div>

        </footer>

    );

};

export default Footer;