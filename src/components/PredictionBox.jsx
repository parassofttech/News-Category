import { useState } from "react";
import { Sparkles, Newspaper, Send, Zap, FileText } from "lucide-react";
import { motion } from "framer-motion";

const PredictionBox = ({ onPredict }) => {
    const [news, setNews] = useState("");
    const [loading, setLoading] = useState(false);

    const samples = [
        {
            title: "Sports",
            text: "India won the cricket world cup after an exciting final match against Australia.",
        },
        {
            title: "Business",
            text: "Government announced a new economic policy to boost startup funding and foreign investments.",
        },
        {
            title: "Tech",
            text: "Apple launched its latest AI powered smartphone featuring advanced neural processors.",
        },
    ];

    const handleSubmit = async () => {
        if (!news.trim()) return;
        try {
            setLoading(true);
            await onPredict(news);
            setNews("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-12 bg-transparent overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                
                {/* Main Card Container with Glow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-4xl border border-white/15 bg-slate-900/70 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 md:p-12 overflow-hidden"
                >
                    {/* Top Accent Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>

                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 shadow-inner">
                            Live Inference Engine
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                            Analyze News with <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-yellow-400 to-blue-400">AI</span>
                        </h2>
                        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto font-normal">
                            Paste your news article text below and let our high-performance Machine Learning model classify it instantly.
                        </p>
                    </div>

                    {/* Textarea Box */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                        
                        <div className="relative">
                            <textarea
                                rows={7}
                                maxLength={5000}
                                value={news}
                                onChange={(e) => setNews(e.target.value)}
                                placeholder="Paste your news article here (e.g., tech announcement, financial market shift, sports match update)..."
                                className="w-full rounded-2xl bg-slate-950/90 border border-white/10 text-white placeholder-gray-500 p-5 md:p-6 outline-none resize-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm md:text-base shadow-inner leading-relaxed"
                            />

                            {/* Character Count Bar */}
                            <div className="flex justify-between items-center mt-3 px-2 text-xs text-gray-400 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <FileText size={14} className="text-cyan-400" />
                                    {news.length} Characters
                                </span>
                                <span className={`${news.length > 4800 ? "text-amber-400 font-bold" : ""}`}>
                                    Max 5000
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Sample Buttons */}
                    <div className="mt-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Or try quick samples:</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {samples.map((item, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setNews(item.text)}
                                    className="px-4 py-2 rounded-xl bg-slate-950/60 border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-300 text-xs md:text-sm transition-all flex items-center gap-2 shadow-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                    <span className="font-medium">{item.title} Sample</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full mt-8 py-4 md:py-5 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base md:text-lg shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {loading ? (
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Classifying Content...</span>
                            </div>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5 text-cyan-200 animate-pulse" />
                                <span>Analyze News Article</span>
                            </>
                        )}
                    </motion.button>

                    {/* Mini Category Preview Cards */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 mt-12 pt-8 border-t border-white/10">
                        <div className="rounded-2xl bg-slate-950/60 border border-white/5 p-4 text-center hover:border-cyan-500/30 transition-colors group">
                            <Newspaper className="mx-auto text-cyan-400 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            <p className="mt-2 text-white text-xs md:text-sm font-semibold">Business</p>
                            <span className="text-[10px] text-gray-500">Economy & Markets</span>
                        </div>

                        <div className="rounded-2xl bg-slate-950/60 border border-white/5 p-4 text-center hover:border-emerald-500/30 transition-colors group">
                            <Zap className="mx-auto text-emerald-400 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            <p className="mt-2 text-white text-xs md:text-sm font-semibold">Sports</p>
                            <span className="text-[10px] text-gray-500">Tournaments & Matches</span>
                        </div>

                        <div className="rounded-2xl bg-slate-950/60 border border-white/5 p-4 text-center hover:border-pink-500/30 transition-colors group">
                            <Sparkles className="mx-auto text-pink-400 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            <p className="mt-2 text-white text-xs md:text-sm font-semibold">Technology</p>
                            <span className="text-[10px] text-gray-500">AI & Gadgets</span>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default PredictionBox;