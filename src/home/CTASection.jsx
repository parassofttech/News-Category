import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BrainCircuit } from "lucide-react";

const CTASection = () => {
    return (
        <section className="relative overflow-hidden  py-28">

            {/* Background Blur */}
            <div className="absolute -top-24 -left-20 w-80 h-80 bg-cyan-500/20 blur-[140px] rounded-full"></div>

            <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-600/20 blur-[160px] rounded-full"></div>

            <div className="max-w-6xl mx-auto px-6">

                <motion.div

                    initial={{ opacity: 0, y: 60 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.8 }}

                    viewport={{ once: true }}

                    className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(6,182,212,0.15)]"

                >

                    {/* Decorative */}
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>

                    <div className="relative z-10 px-10 py-20 lg:px-20">

                        <div className="flex justify-center mb-8">

                            <div className="w-24 h-24 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">

                                <BrainCircuit className="w-12 h-12 text-white" />

                            </div>

                        </div>

                        <h2 className="text-center text-white text-5xl lg:text-6xl font-black leading-tight">

                            Ready to Classify

                            <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-3">

                                News with AI?

                            </span>

                        </h2>

                        <p className="text-center text-black text-lg mt-8 max-w-3xl mx-auto leading-8">

                            Upload or paste any news article and let our
                            Machine Learning model instantly predict whether it
                            belongs to Business, Sports, Technology,
                            Entertainment or Politics with confidence scores and
                            interactive analytics.

                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-14">

                            <Link
                                to="/predict"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg hover:scale-105 transition duration-300 shadow-xl"
                            >

                                <Sparkles className="w-6 h-6" />

                                Start Prediction

                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />

                            </Link>

                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
                            >
                                Learn More
                            </Link>

                        </div>

                        {/* Stats */}

                        <div className="grid md:grid-cols-4 gap-6 mt-20">

                            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 text-center">

                                <h3 className="text-cyan-400 text-4xl font-black">

                                    90%

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Accuracy

                                </p>

                            </div>

                            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 text-center">

                                <h3 className="text-green-400 text-4xl font-black">

                                    5

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Categories

                                </p>

                            </div>

                            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 text-center">

                                <h3 className="text-purple-400 text-4xl font-black">

                                    AI

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Powered

                                </p>

                            </div>

                            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 text-center">

                                <h3 className="text-pink-400 text-4xl font-black">

                                    &lt;1s

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Prediction Time

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default CTASection;