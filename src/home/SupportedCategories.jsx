import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";

// Sample categories data (Aap ise apne props ya state ke mutabiq use kar sakte hain)
const categories = [
    {
        category: "Sport",
        total: "520+ Articles",
        description: "Cricket, football, olympics, and major tournament updates.",
        color: "from-cyan-500/20 to-blue-500/20",
        borderHover: "hover:border-cyan-400/40",
        textColor: "text-cyan-400"
    },
    {
        category: "Business",
        total: "520+ Articles",
        description: "Stock markets, corporate growth, startup funding, and economy.",
        color: "from-emerald-500/20 to-teal-500/20",
        borderHover: "hover:border-emerald-400/40",
        textColor: "text-emerald-400"
    },
    {
        category: "Technology",
        total: "520+ Articles",
        description: "Artificial intelligence, software updates, gadgets, and cyber tech.",
        color: "text-purple-500/20 to-indigo-500/20",
        borderHover: "hover:border-purple-400/40",
        textColor: "text-purple-400"
    },
    {
        category: "Politics",
        total: "520+ Articles",
        description: "Government policies, elections, national debates, and laws.",
        color: "text-amber-500/20 to-orange-500/20",
        borderHover: "hover:border-amber-400/40",
        textColor: "text-amber-400"
    },
    {
        category: "Entertainment",
        total: "520+ Articles",
        description: "Movies, celebrity updates, music releases, and show business.",
        color: "text-pink-500/20 to-rose-500/20",
        borderHover: "hover:border-pink-400/40",
        textColor: "text-pink-400"
    }
];

const SupportedCategories = () => {
    return (
        <section className="relative  py-28 overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 shadow-inner">
                        Dataset Coverage
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Supported <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400">Categories</span>
                    </h2>
                    <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                        Our high-performance Machine Learning model classifies news seamlessly into multiple specialized domains with elite confidence scores.
                    </p>
                </motion.div>

                {/* Categories Grid - Mobile par 2 columns, Desktop par 3 */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {categories.map((item, index) => (
                        <CategoryCard
                            key={index}
                            category={item.category}
                            total={item.total}
                            description={item.description}
                            color={item.color}
                            borderHover={item.borderHover}
                            textColor={item.textColor}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

const CategoryCard = ({ category, total, description, color, borderHover, textColor, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`group relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-5 md:p-8 transition-all duration-300 ${borderHover} hover:bg-slate-900/90 shadow-xl overflow-hidden flex flex-col justify-between`}
        >
            {/* Top Badge & Icon */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center border border-white/5`}>
                        <FolderGit2 className={`w-5 h-5 md:w-6 md:h-6 ${textColor}`} />
                    </div>
                    <span className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {total}
                    </span>
                </div>

                <h3 className="text-white text-lg md:text-2xl font-bold tracking-tight group-hover:text-cyan-300 transition-colors">
                    {category}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed font-normal">
                    {description}
                </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                <span>Explore Model Insights</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </div>
        </motion.div>
    );
};

export default SupportedCategories;