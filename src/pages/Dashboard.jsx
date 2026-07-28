import { useEffect, useState, useMemo } from "react";
import {
    BrainCircuit,
    Newspaper,
    Trophy,
    Briefcase,
    Landmark,
    Cpu,
    Film,
    Activity,
    BarChart3,
    TrendingUp,
    Filter,
    Calendar,
    Sparkles
} from "lucide-react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

import { getHistory } from "../services/api";
import Loader from "../components/Loader";

const COLORS = [
    "#06b6d4",
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#a855f7"
];

const Dashboard = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [timeFilter, setTimeFilter] = useState("all");

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        try {
            const res = await getHistory();
            setHistory(res.data || res);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // Filter logic based on time
    const filteredHistory = useMemo(() => {
        if (timeFilter === "all") return history;
        const now = new Date();
        return history.filter(item => {
            const itemDate = new Date(item.createdAt);
            if (timeFilter === "today") {
                return itemDate.toDateString() === now.toDateString();
            }
            if (timeFilter === "week") {
                const weekAgo = new Date(now.setDate(now.getDate() - 7));
                return itemDate >= weekAgo;
            }
            return true;
        });
    }, [history, timeFilter]);

    const totalPredictions = filteredHistory.length;

   const categoryCount = {};
    filteredHistory.forEach(item => {
        // Fallback agar category key alag ho ya undefined ho
        const rawCategory = item.category || item.categoryName || "Uncategorized";
        const cat = rawCategory.toLowerCase().trim();
        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });

    const chartData = Object.keys(categoryCount).map(key => ({
        name: key,
        value: categoryCount[key]
    }));

    const averageConfidence =
        filteredHistory.length > 0
            ? (
                filteredHistory.reduce(
                    (sum, item) => sum + Number(item.confidence || 0),
                    0
                ) / filteredHistory.length
            ).toFixed(1)
            : 0;

    const highestCategory =
        chartData.length > 0
            ? [...chartData].sort((a, b) => b.value - a.value)[0].name
            : "N/A";

    const iconMap = {
        sport: <Trophy size={20} />,
        business: <Briefcase size={20} />,
        politics: <Landmark size={20} />,
        tech: <Cpu size={20} />,
        entertainment: <Film size={20} />
    };

    if (loading) return <Loader />;

    return (
        <section className="min-h-screen bg-linear-to-br from-slate-950/87 via-emerald-950/60 to-slate-950/90 py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header & Filter Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                            <Sparkles size={14} /> AI Intelligence Suite v2.4
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400">
                            Analytics Dashboard
                        </h1>
                        <p className="text-gray-400 mt-2 text-base">
                            Real-time monitoring of model predictions, metrics, and distribution.
                        </p>
                    </div>

                    {/* Time Filter Pills */}
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl self-start">
                        <Filter size={16} className="text-cyan-400 ml-2" />
                        {["all", "week", "today"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setTimeFilter(filter)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                                    timeFilter === filter
                                        ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {filter === "all" ? "All Time" : filter === "week" ? "This Week" : "Today"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Top Stat Cards */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    <Card
                        title="Total Predictions"
                        value={totalPredictions}
                        icon={<Newspaper />}
                        color="from-cyan-500 to-blue-600"
                        trend="+12% from last week"
                    />
                    <Card
                        title="Average Confidence"
                        value={`${averageConfidence}%`}
                        icon={<BrainCircuit />}
                        color="from-emerald-500 to-teal-600"
                        trend="High Accuracy Rating"
                    />
                    <Card
                        title="Top Category"
                        value={highestCategory}
                        icon={<TrendingUp />}
                        color="from-purple-500 to-indigo-600"
                        trend="Most frequent topic"
                    />
                    <Card
                        title="AI System Status"
                        value="Online"
                        icon={<Activity />}
                        color="from-pink-500 to-rose-600"
                        trend="Latency: 42ms"
                        isLive={true}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid lg:grid-cols-2 gap-8 mt-10">
                    
                    {/* Donut Chart */}
                    <div className="rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    <BrainCircuit size={20} />
                                </div>
                                <h2 className="text-white text-xl font-bold">Category Distribution</h2>
                            </div>
                        </div>

                        {chartData.length > 0 ? (
                            <div className="w-full h-87.5">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            dataKey="value"
                                            outerRadius={120}
                                            innerRadius={75}
                                            paddingAngle={4}
                                        >
                                            {chartData.map((item, index) => (
                                                <Cell
                                                    key={index}
                                                    fill={COLORS[index % COLORS.length]}
                                                    stroke="rgba(255,255,255,0.05)"
                                                    strokeWidth={2}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend formatter={(value) => <span className="text-gray-300 text-sm capitalize">{value}</span>} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <EmptyState message="No chart data available for selected filter." />
                        )}
                    </div>

                    {/* Bar Chart */}
                    <div className="rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <BarChart3 size={20} />
                                </div>
                                <h2 className="text-white text-xl font-bold">Category Analytics</h2>
                            </div>
                        </div>

                        {chartData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                                    <XAxis dataKey="name" stroke="#94a3b8" textAnchor="end" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar
                                        dataKey="value"
                                        fill="#06b6d4"
                                        radius={[10, 10, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <EmptyState message="No analytic metrics found." />
                        )}
                    </div>

                </div>

                {/* Category Metric Cards */}
                <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5 mt-10">
                    {chartData.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-slate-900/30 border border-white/10 backdrop-blur-xl p-5 hover:border-cyan-500/40 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                    {iconMap[item.name] || <Sparkles size={18} />}
                                </div>
                                <span className="text-3xl font-black text-white">
                                    {item.value}
                                </span>
                            </div>
                            <h3 className="text-gray-300 text-base capitalize mt-4 font-medium flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Recent Predictions Table */}
                <div className="mt-12 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-white text-2xl font-bold">Recent Predictions Log</h2>
                        <span className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            Showing latest {Math.min(filteredHistory.length, 8)} records
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-cyan-400">
                                    <th className="py-4 px-4 font-semibold">News Extract</th>
                                    <th className="py-4 px-4 font-semibold">Category</th>
                                    <th className="py-4 px-4 font-semibold">Confidence</th>
                                    <th className="py-4 px-4 font-semibold">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                {filteredHistory.length > 0 ? (
                                    filteredHistory.slice(0, 8).map((item, index) => (
                                        <tr key={index} className="hover:bg-white/2 transition-colors">
                                            <td className="py-4 px-4 text-gray-300 max-w-md truncate">
                                                {item.news}
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs capitalize font-medium">
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2 font-bold text-emerald-400">
                                                    <span>{item.confidence}%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-gray-400 text-xs flex items-center gap-1.5 pt-5">
                                                <Calendar size={13} />
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-8 text-gray-500">
                                            No prediction history found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Reusable Top Stat Card Component
const Card = ({ title, value, icon, color, trend, isLive }) => (
    <div className="rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group shadow-lg relative overflow-hidden">
        <div className="flex items-center justify-between">
            <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                {icon}
            </div>
            {isLive && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live
                </span>
            )}
        </div>
        <p className="text-gray-400 mt-5 text-sm font-medium">{title}</p>
        <h2 className="text-white text-3xl font-black mt-1 tracking-tight">{value}</h2>
        {trend && (
            <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-white/5 flex items-center gap-1">
                {trend}
            </p>
        )}
    </div>
);

// Custom Chart Tooltip for Professional Look
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-xl p-3 text-xs shadow-2xl">
                <p className="text-white font-bold capitalize mb-1">{payload[0].payload.name}</p>
                <p className="text-cyan-400 font-semibold">
                    Count: <span className="text-white font-bold">{payload[0].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

// Empty State Placeholder
const EmptyState = ({ message }) => (
    <div className="h-87.5 flex items-center justify-center text-gray-500 text-sm">
        {message}
    </div>
);

export default Dashboard;