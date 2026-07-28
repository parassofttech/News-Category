import { useEffect, useState, useMemo } from "react";
import {
    Search,
    Filter,
    Trash2,
    History as HistoryIcon,
    CalendarDays,
    BrainCircuit,
    Sparkles,
    ArrowUpDown,
    CheckCircle2
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import {
    getHistory,
    deleteHistory
} from "../services/api";

import Loader from "../components/Loader";

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("newest");

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const res = await getHistory();
            setHistory(res.data || res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const clearHistory = async () => {
        try {
            await deleteHistory();
            setHistory([]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteItem = (indexToDelete) => {
        setHistory(prev => prev.filter((_, idx) => idx !== indexToDelete));
    };

    // Robust Filtering & Sorting Logic
    const filteredHistory = useMemo(() => {
        return history
            .filter((item) => {
                const matchSearch =
                    item.news
                        ?.toLowerCase()
                        .includes(search.toLowerCase());

                const matchCategory =
                    category === "all" ||
                    item.category?.toLowerCase() === category.toLowerCase();

                return matchSearch && matchCategory;
            })
            .sort((a, b) => {
                const dateA = new Date(a.createdAt || Date.now());
                const dateB = new Date(b.createdAt || Date.now());
                return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
            });
    }, [history, search, category, sortOrder]);

    const categories = [
        "all",
        "sport",
        "business",
        "tech",
        "politics",
        "entertainment"
    ];

    // Calculate Dynamic Category Breakdown Counts
    const categoryCounts = useMemo(() => {
        const counts = {};
        categories.forEach(cat => {
            if (cat === "all") counts[cat] = history.length;
            else counts[cat] = history.filter(item => item.category?.toLowerCase() === cat).length;
        });
        return counts;
    }, [history]);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className="min-h-screen bg-linear-to-br from-slate-950/87 via-emerald-950/60 to-slate-950/90 py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                            <HistoryIcon size={32} className="text-cyan-400" />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
                                <Sparkles size={13} /> Real-time Analytics & Logs
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-lineaar-to-r from-white via-slate-200 to-slate-400">
                                Prediction History
                            </h1>
                            <p className="text-gray-400 mt-1 text-sm md:text-base">
                                Comprehensive audit logs and records of all previous AI classifications.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <StatCard
                        title="Total Predictions"
                        value={history.length}
                        icon={<BrainCircuit size={22} />}
                        color="from-cyan-500 to-blue-600"
                    />
                    <StatCard
                        title="Active Filter"
                        value={category.toUpperCase()}
                        icon={<Filter size={22} />}
                        color="from-purple-500 to-indigo-600"
                    />
                    <StatCard
                        title="AI Model Engine"
                        value="Operational"
                        icon={<CheckCircle2 size={22} />}
                        color="from-emerald-500 to-teal-600"
                        isLive={true}
                    />
                </div>

                {/* Category Quick Pills */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer border ${
                                category === cat
                                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25"
                                    : "bg-slate-900/60 text-gray-300 border-white/10 hover:bg-white/10"
                            }`}
                        >
                            <span className="capitalize">{cat}</span>
                            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${category === cat ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-white/5 text-gray-400"}`}>
                                {categoryCounts[cat] || 0}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Search & Filter Bar Section */}
                <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-6 mb-8 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="relative">
                            <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search through news descriptions..."
                                className="w-full bg-slate-950/60 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white text-sm outline-none focus:border-cyan-400/55 transition-all placeholder:text-gray-500"
                            />
                        </div>

                        {/* Sort Order Selector */}
                        <div className="flex items-center justify-end">
                            <button
                                onClick={() => setSortOrder(prev => prev === "newest" ? "oldest" : "newest")}
                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 px-5 py-3 rounded-2xl text-sm transition font-medium w-full md:w-auto justify-center cursor-pointer"
                            >
                                <ArrowUpDown size={16} className="text-cyan-400" />
                                {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                            </button>
                        </div>

                    </div>
                </div>

                {/* Data Table Section */}
                <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-8 shadow-2xl overflow-hidden relative">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-white text-2xl font-bold">Prediction Archives</h2>
                            <p className="text-xs text-gray-400 mt-1">Showing {filteredHistory.length} filtered entries</p>
                        </div>

                        {history.length > 0 && (
                            <button
                                onClick={clearHistory}
                                className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 text-rose-400 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                            >
                                <Trash2 size={16} />
                                Clear All Logs
                            </button>
                        )}
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-cyan-400">
                                    <th className="py-4 px-4 font-semibold">News Context</th>
                                    <th className="py-4 px-4 font-semibold">Category</th>
                                    <th className="py-4 px-4 font-semibold">Confidence</th>
                                    <th className="py-4 px-4 font-semibold">Timestamp</th>
                                    <th className="py-4 px-4 font-semibold text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                <AnimatePresence>
                                    {filteredHistory.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center py-16 text-gray-500">
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    <HistoryIcon size={40} className="text-gray-600 mb-2 stroke-1" />
                                                    <p className="text-base font-medium text-gray-400">No predictions found.</p>
                                                    <p className="text-xs text-gray-600">Try modifying your search queries or category filters.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredHistory.map((item, index) => (
                                            <motion.tr
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.2, delay: index * 0.02 }}
                                                key={item._id || index}
                                                className="hover:bg-white/2 transition-colors group"
                                            >
                                                <td className="py-4 px-4 text-gray-300 max-w-lg">
                                                    <p className="line-clamp-2 leading-relaxed">{item.news}</p>
                                                </td>

                                                <td className="py-4 px-4 whitespace-nowrap">
                                                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs capitalize font-medium">
                                                        {item.category || "General"}
                                                    </span>
                                                </td>

                                                <td className="py-4 px-4 whitespace-nowrap">
                                                    <span className="text-emerald-400 font-bold">
                                                        {item.confidence ? `${item.confidence}%` : "N/A"}
                                                    </span>
                                                </td>

                                                <td className="py-4 px-4 whitespace-nowrap text-gray-400 text-xs">
                                                    <div className="flex gap-1.5 items-center">
                                                        <CalendarDays size={14} className="text-gray-500" />
                                                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Just now"}
                                                    </div>
                                                </td>

                                                <td className="py-4 px-4 whitespace-nowrap text-right">
                                                    <button
                                                        onClick={() => handleDeleteItem(index)}
                                                        className="p-2 rounded-xl  text-rose-400 bg-rose-500/10 transition   cursor-pointer"
                                                        title="Delete entry"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </td>
                                            </motion.tr>
                                        ))
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
};

const StatCard = ({ title, value, icon, color, isLive }) => (
    <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-6 shadow-xl relative overflow-hidden group hover:border-white/20 transition-all">
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
        <h2 className="text-white text-3xl font-black mt-1 tracking-tight truncate">{value}</h2>
    </div>
);

export default History;