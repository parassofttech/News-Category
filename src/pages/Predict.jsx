import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PredictionBox from "../components/PredictionBox";
import PredictionResult from "../components/PredictionResult";
import ConfidenceChart from "../components/ConfidenceChart";
import Loader from "../components/Loader";
import { predictNews } from "../services/api";
import { AlertCircle, Sparkles, Cpu, ShieldCheck } from "lucide-react";

const Predict = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handlePrediction = async (news) => {
        try {
            setLoading(true);
            setError("");
            setResult(null);

            if (!news.trim()) {
                setError("Please enter or paste news text first.");
                return;
            }

            // Backend API Call
            const response = await predictNews(news);
            console.log("Backend Response:", response);
            setResult(response.data);
        } catch (err) {
            console.log("Prediction Error:", err);
            setError(
                err.response?.data?.message ||
                "Server error or connection failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-linear-to-br from-slate-950/87 via-emerald-950/60 to-slate-950/90 py-24 overflow-hidden">
            
            {/* Ambient Glowing Background Orbs */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Subtle Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none"></div>

            <div className="relative max-w-5xl mx-auto px-6">

                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6 shadow-inner backdrop-blur-md">
                        <Sparkles size={16} className="animate-pulse text-emerald-400" />
                        <span>Real-Time Neural Text Classification</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        AI News{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Classifier Engine
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                        Paste any news article snippet below to instantly determine its category and probability confidence breakdown using advanced Machine Learning.
                    </p>

                    {/* Quick trust metrics */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <Cpu size={14} className="text-cyan-400" /> TF-IDF Vectorization
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <ShieldCheck size={14} className="text-emerald-400" /> 96% Model Accuracy
                        </span>
                    </div>
                </motion.div>

                {/* Error Banner */}
                <AnimatePresence>
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="max-w-2xl mx-auto mb-8 flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-300 p-4 rounded-2xl backdrop-blur-xl shadow-lg"
                        >
                            <AlertCircle className="shrink-0 w-5 h-5 text-red-400" />
                            <span className="text-sm font-medium">{error}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Prediction Input Box Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <PredictionBox onPredict={handlePrediction} />
                </motion.div>

                {/* Loader State */}
                {loading && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="my-12 flex justify-center"
                    >
                        <Loader />
                    </motion.div>
                )}

                {/* Result & Chart Display */}
                <AnimatePresence>
                    {result && !loading && (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 space-y-8"
                        >
                            <PredictionResult prediction={result} />

                            {result.probabilities && (
                                <ConfidenceChart probabilities={result.probabilities} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Predict;