import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Newspaper, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Predict", path: "/predict" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "History", path: "/history" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-slate-950/80 border-b border-white/10 backdrop-blur-xl text-white">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* Logo Section */}
               <NavLink
    to="/"
    className="flex items-center gap-3 group"
>
    <div className="w-11 h-11 rounded-xl overflow-hidden border  flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform">
        <img
            src="/news-logo.png"
            alt="NewsClassify Logo"
            className="w-full h-full object-cover"
        />
    </div>

    <div className="flex flex-col">
        <span className="text-xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-cyan-400 tracking-wide flex items-center gap-1.5">
            NewsClassify
            <Sparkles size={12} className="text-cyan-400" />
        </span>

        <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
            Classification Engine
        </span>
    </div>
</NavLink>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-2 bg-slate-900/40 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative ${
                                    isActive
                                        ? "text-slate-950 bg-cyan-400 shadow-md shadow-cyan-400/20 font-bold"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden px-6 py-4"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                                            isActive
                                                ? "text-slate-950 bg-cyan-400 font-bold shadow-md shadow-cyan-400/20"
                                                : "text-gray-300 hover:text-white hover:bg-white/5"
                                        }`
                                    }
                                >
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;