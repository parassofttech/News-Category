import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Sparkles,
    BrainCircuit,
    ArrowRight,
    Newspaper,
    ShieldCheck,
    BarChart3
} from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-950/80 via-emerald-950/50 to-slate-900/90 min-h-screen flex items-center">
            {/* Background Glow Effects */}
            <div className="absolute w-125 h-125 bg-emerald-500/15 blur-[140px] rounded-full -top-40 -left-20 pointer-events-none"></div>
            <div className="absolute w-125 h-125 bg-cyan-600/15 blur-[140px] rounded-full -bottom-32 -right-20 pointer-events-none"></div>

            {/* Futuristic Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-md shadow-inner">
                        <Sparkles size={16} className="text-emerald-400 animate-pulse" />
                        <span>Next-Gen Machine Learning Classifier</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Smart News{" "}
                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 mt-2">
                            Classification
                        </span>
                        Engine
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mt-6 leading-relaxed max-w-xl font-normal">
                        Categorize breaking articles instantly using high-performance Machine Learning. 
                        Accurately sort updates across <span className="text-emerald-400 font-semibold">Sport, Business, Politics, Tech, and Entertainment</span> with elite precision.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link
                            to="/predict"
                            className="group px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold flex items-center gap-3 shadow-lg shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <span>Start Prediction</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/dashboard"
                            className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300 backdrop-blur-md"
                        >
                            View Dashboard
                        </Link>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10">
                        <div>
                            <h2 className="text-emerald-400 text-3xl font-black tracking-tight">96%</h2>
                            <p className="text-gray-400 text-sm mt-1">Model Accuracy</p>
                        </div>
                        <div>
                            <h2 className="text-teal-400 text-3xl font-black tracking-tight">&lt;0.5s</h2>
                            <p className="text-gray-400 text-sm mt-1">Processing</p>
                        </div>
                        <div>
                            <h2 className="text-cyan-400 text-3xl font-black tracking-tight">5+</h2>
                            <p className="text-gray-400 text-sm mt-1">Categories</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Interactive Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                    
                    <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl p-6 md:p-8 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Live AI Pipeline Feed</span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                Active
                            </span>
                        </div>

                        <FloatingCard
                            icon={<Newspaper size={22} />}
                            colorTheme="cyan"
                            title="Breaking News Feed"
                            text="India wins thrilling cricket world cup final match."
                        />

                        <FloatingCard
                            icon={<BrainCircuit size={22} />}
                            colorTheme="emerald"
                            title="AI Model Prediction"
                            text="Detected Category: Sport (Confidence: 96.40%)"
                        />

                        <FloatingCard
                            icon={<ShieldCheck size={22} />}
                            colorTheme="purple"
                            title="Verified Clean Text"
                            text="Tokenized and preprocessed via TF-IDF vectorizer."
                        />

                        <FloatingCard
                            icon={<BarChart3 size={22} />}
                            colorTheme="pink"
                            title="Analytics Synced"
                            text="Stored successfully into user prediction ledger."
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const FloatingCard = ({ icon, title, text, colorTheme }) => {
    // Safe static color mapper to avoid Tailwind dynamic compilation bugs
    const themes = {
        cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        pink: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02, x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-lg p-4 md:p-5 flex items-start gap-4 shadow-md hover:border-white/20 transition-colors"
        >
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${themes[colorTheme] || themes.cyan}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-white font-semibold text-sm md:text-base tracking-wide">
                    {title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

export default Hero;