import { motion } from "framer-motion";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import { PieChart as ChartIcon, Sparkles, Activity } from "lucide-react";

const COLORS = [
    "#06b6d4", // Cyan
    "#22c55e", // Green
    "#ef4444", // Red
    "#a855f7", // Purple
    "#f59e0b"  // Amber
];

// Custom Interactive Tooltip
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0];
        return (
            <div className="rounded-2xl bg-slate-950/90 border border-white/20 backdrop-blur-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-white">
                <div className="flex items-center gap-2 mb-1">
                    <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: data.payload.fill }} 
                    />
                    <p className="text-sm font-bold uppercase tracking-wider">{data.name}</p>
                </div>
                <p className="text-xl font-black text-cyan-300">
                    {data.value}% <span className="text-xs font-normal text-gray-400">probability</span>
                </p>
            </div>
        );
    }
    return null;
};

// Custom Legend for modern look
const CustomLegend = ({ payload }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            {payload.map((entry, index) => (
                <div key={`item-${index}`} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs font-medium text-gray-300">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span className="uppercase tracking-wider">{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

const ConfidenceChart = ({ probabilities }) => {
    if (!probabilities) return null;

    const data = Object.keys(probabilities).map((key) => ({
        name: key,
        value: probabilities[key]
    }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-4xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)] mt-12 overflow-hidden"
        >
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <ChartIcon size={22} className="animate-pulse" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            Confidence Distribution
                        </h2>
                        <p className="text-xs text-gray-400">Probabilistic breakdown across all category vectors</p>
                    </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold self-start md:self-auto">
                    <Activity size={14} /> Multi-Class Analytics
                </div>
            </div>

            {/* Chart Container */}
            <div className="relative w-full">
                <ResponsiveContainer width="100%" height={380}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={140}
                            innerRadius={85}
                            paddingAngle={6}
                            animationBegin={200}
                            animationDuration={1000}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth={2}
                                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend content={<CustomLegend />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Bottom Footer Info */}
            <div className="mt-8 pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gray-400 font-normal">
                    Values represent softmax probability outputs generated by the classifier neural net.
                </p>
            </div>
        </motion.div>
    );
};

export default ConfidenceChart;