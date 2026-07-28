import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const HistoryTable = ({ history, onDelete }) => {

    return (

        <motion.div

            initial={{opacity:0,y:40}}

            animate={{opacity:1,y:0}}

            className="rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-xl p-8 overflow-hidden"

        >

            <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl text-white font-bold">

                    Prediction History

                </h2>

                <button

                    onClick={onDelete}

                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"

                >

                    <Trash2 size={18}/>

                    Clear History

                </button>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-white/10">

                            <th className="text-left py-4 text-cyan-400">

                                News

                            </th>

                            <th className="text-left py-4 text-cyan-400">

                                Category

                            </th>

                            <th className="text-left py-4 text-cyan-400">

                                Confidence

                            </th>

                            <th className="text-left py-4 text-cyan-400">

                                Date

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            history?.map((item,index)=>(

                                <tr

                                    key={index}

                                    className="border-b border-white/5 hover:bg-white/5 transition"

                                >

                                    <td className="py-5 text-gray-300 max-w-lg">

                                        {item.news}

                                    </td>

                                    <td>

                                        <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">

                                            {item.category}

                                        </span>

                                    </td>

                                    <td className="text-green-400 font-bold">

                                        {item.confidence}%

                                    </td>

                                    <td className="text-gray-400">

                                        {

                                            new Date(item.createdAt)

                                            .toLocaleDateString()

                                        }

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </motion.div>

    )

}

export default HistoryTable;