import { motion } from "framer-motion";
import {
    Brain,
    Zap,
    ShieldCheck,
    BarChart3,
    Globe,
    Cpu,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI Prediction",
        description: "Advanced Machine Learning model classifies news with elite accuracy.",
        color: "text-cyan-400",
        bg: "from-cyan-500/20 to-blue-500/20",
    },
    {
        icon: Zap,
        title: "Fast Analysis",
        description: "Get instant news classification in less than a fraction of a second.",
        color: "text-amber-400",
        bg: "from-amber-500/20 to-orange-500/20",
    },
    {
        icon: ShieldCheck,
        title: "Secure Platform",
        description: "Your news data and user activities are processed with strict security.",
        color: "text-emerald-400",
        bg: "from-emerald-500/20 to-teal-500/20",
    },
    {
        icon: BarChart3,
        title: "Confidence Score",
        description: "View prediction probability percentages with interactive metrics.",
        color: "text-purple-400",
        bg: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: Globe,
        title: "Multi Category",
        description: "Supports Business, Sports, Politics, Tech, and Entertainment smoothly.",
        color: "text-blue-400",
        bg: "from-blue-500/20 to-indigo-500/20",
    },
    {
        icon: Cpu,
        title: "ML Powered",
        description: "Built using robust NLP pipelines, TF-IDF, and Python backend microservices.",
        color: "text-pink-400",
        bg: "from-pink-500/20 to-rose-500/20",
    },
];

const Features = () => {
    return (
        <section className="relative  py-28 overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 shadow-inner">
                        Core Capabilities
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Engineered for <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400">Intelligence</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto font-normal leading-relaxed">
                        Experience blazing-fast, accurate, and secure news categorization powered by state-of-the-art Artificial Intelligence and Machine Learning.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-3 md:gap-8">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -6,
                                    scale: 1.02,
                                }}
                                className="group relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-3 md:p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden"
                            >
                                {/* Inner glow line on hover */}
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div
                                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-linear-to-br ${feature.bg} flex items-center justify-center mx-auto border border-white/5 shadow-inner`}
                                >
                                    <Icon
                                        className={`${feature.color} w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110 duration-300`}
                                    />
                                </div>

                                <h3 className="text-white text-sm md:text-xl font-bold text-center mt-5 tracking-wide">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 text-[10px] md:text-sm text-center mt-2.5 leading-4 md:leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Features;