import { motion } from "framer-motion";
import {
    Trophy,
    Briefcase,
    Cpu,
    Landmark,
    Film
} from "lucide-react";

const iconMap = {
    sport: Trophy,
    business: Briefcase,
    tech: Cpu,
    politics: Landmark,
    entertainment: Film
};

const colorMap = {
    sport: "from-green-500 to-emerald-600",
    business: "from-blue-500 to-cyan-600",
    tech: "from-violet-500 to-indigo-600",
    politics: "from-red-500 to-pink-600",
    entertainment: "from-yellow-500 to-orange-500"
};

const CategoryCard = ({
    category,
    total = 0,
    description
}) => {

    const Icon = iconMap[category] || Cpu;

    return (

        <motion.div

            whileHover={{
                scale: 1.05,
                y: -10
            }}

            transition={{
                duration: .3
            }}

            className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 shadow-xl"

        >

            <div className={`absolute inset-0 opacity-10 bg-linear-to-br ${colorMap[category]}`}></div>

            <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${colorMap[category]} flex items-center justify-center`}>

                <Icon size={30} className="text-white"/>

            </div>

            <h2 className="text-white text-2xl font-bold mt-6 capitalize">

                {category}

            </h2>

            <p className="text-gray-400 mt-3 leading-7">

                {description}

            </p>

            <div className="mt-8 flex justify-between items-center">

                <div>

                    <p className="text-gray-500 text-sm">

                        Total Predictions

                    </p>

                    <h3 className="text-cyan-400 text-3xl font-bold">

                        {total}

                    </h3>

                </div>

                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">

                    <Icon className="text-white"/>

                </div>

            </div>

        </motion.div>

    );

};

export default CategoryCard;