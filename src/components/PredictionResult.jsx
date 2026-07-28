import { motion } from "framer-motion";
import {
    CheckCircle2,
    BrainCircuit,
    Target,
    CalendarDays,
    FileText,
    Sparkles,
    ShieldCheck
} from "lucide-react";

const colors = {
    sport: "from-green-500 via-emerald-500 to-teal-600",
    business: "from-blue-500 via-indigo-500 to-cyan-600",
    politics: "from-red-500 via-rose-500 to-pink-600",
    entertainment: "from-purple-500 via-fuchsia-500 to-pink-600",
    tech: "from-indigo-500 via-blue-600 to-violet-600"
};

const badgeGlows = {
    sport: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    business: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    politics: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    entertainment: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    tech: "shadow-[0_0_30px_rgba(99,102,241,0.3)]"
};

const PredictionResult = ({ prediction }) => {
    if (!prediction) return null;

    const categoryKey = prediction.category?.toLowerCase() || "tech";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mt-12 rounded-4xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden"
        >
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>

            {/* Section Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <BrainCircuit size={22} className="animate-pulse" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            AI Prediction Result
                        </h2>
                        <p className="text-xs text-gray-400">Analyzed successfully via Neural Pipeline</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck size={14} /> Verified Inference
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Left Column: Category & Metrics */}
                <div className="space-y-6 flex flex-col justify-between">
                    
                    {/* Category Banner Card */}
                    <div className={`relative rounded-3xl bg-linear-to-br ${colors[categoryKey] || "from-cyan-500 to-blue-600"} p-8 ${badgeGlows[categoryKey] || "shadow-[0_0_30px_rgba(34,211,238,0.3)]"} overflow-hidden border border-white/20`}>
                        <div className="absolute -right-6 -bottom-6 opacity-15 pointer-events-none">
                            <Sparkles size={140} className="text-white" />
                        </div>
                        
                        <span className="inline-block px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-wider mb-2">
                            Detected Domain
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase drop-shadow-md">
                            {prediction.category}
                        </h1>
                    </div>

                    {/* Sub Metrics: Confidence & Timestamp */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-slate-950/70 border border-white/10 p-5 flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center justify-between text-emerald-400 mb-2">
                                <Target size={20} />
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Accuracy</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Model Confidence</p>
                                <h2 className="text-2xl md:text-3xl text-white font-black tracking-tight mt-1">
                                    {prediction.confidence}%
                                </h2>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-slate-950/70 border border-white/10 p-5 flex flex-col justify-between hover:border-pink-500/30 transition-colors">
                            <div className="flex items-center justify-between text-pink-400 mb-2">
                                <CalendarDays size={20} />
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20">Timestamp</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Processed At</p>
                                <h2 className="text-xs md:text-sm text-white font-semibold truncate mt-2">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Processed News Content */}
                <div className="rounded-3xl bg-slate-950/70 border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-inner">
                    <div>
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                            <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                            <h3 className="text-white text-lg font-bold tracking-tight">
                                Analyzed News Content
                            </h3>
                        </div>

                        <div className="relative max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                                "{prediction.news}"
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1.5 font-medium">
                            <FileText size={14} className="text-cyan-400" />
                            Source Text Payload
                        </span>
                        <span className="text-cyan-400 font-semibold">{prediction.news?.length || 0} chars</span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default PredictionResult;