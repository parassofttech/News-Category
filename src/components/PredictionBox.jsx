import { useState } from "react";
import { Sparkles, Newspaper, Zap, FileText } from "lucide-react";
import { motion } from "framer-motion";

const PredictionBox = ({ onPredict }) => {

    const [news, setNews] = useState("");
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState("");



    const samples = [
        {
            title:"Sports",
            text:"India won the cricket world cup after an exciting final match against Australia."
        },
        {
            title:"Business",
            text:"Government announced a new economic policy to boost startup funding and foreign investments."
        },
        {
            title:"Tech",
            text:"Apple launched its latest AI powered smartphone featuring advanced neural processors."
        }
    ];



    const handleSubmit = async()=>{


        if(!news.trim()){

            setError("Please enter news article");

            return;

        }


        if(news.length < 20){

            setError("Please enter at least 20 characters");

            return;

        }


        try{

            setError("");

            setLoading(true);


            await onPredict(news);


        }

        catch(err){

            setError(
                "Prediction failed. Please try again."
            );

        }

        finally{

            setLoading(false);

        }

    };



return (

<section className="relative py-12 bg-transparent">

<div className="max-w-5xl mx-auto px-4 md:px-6">


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="rounded-4xl border border-white/15 bg-slate-900/70 backdrop-blur-xl p-6 md:p-12"

>


<div className="text-center mb-10">


<span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm">

AI Classification Engine

</span>


<h2 className="mt-5 text-3xl md:text-5xl font-black text-white">

Analyze News with

<span className="text-cyan-400">
 AI
</span>

</h2>


<p className="text-gray-400 mt-4">

Machine Learning powered news category prediction system.

</p>


</div>




<textarea

rows={7}

maxLength={5000}

value={news}

onChange={(e)=>setNews(e.target.value)}

placeholder="Paste news article..."

className="w-full rounded-2xl bg-slate-950 border border-white/10 text-white p-6 outline-none focus:border-cyan-400"

/>



<div className="flex justify-between text-gray-400 text-sm mt-3">

<span className="flex gap-2">

<FileText size={16}/>

{news.length} Characters

</span>


<span>
5000 Max
</span>


</div>



{
error &&

<p className="text-red-400 mt-4 text-center">

{error}

</p>

}




<div className="flex flex-wrap gap-3 mt-8">


{
samples.map((item,index)=>(


<button

key={index}

onClick={()=>setNews(item.text)}

className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"

>

{item.title} Sample

</button>


))
}


</div>




<motion.button

onClick={handleSubmit}

disabled={loading}

whileTap={{
scale:0.97
}}

className="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold flex justify-center items-center gap-3 disabled:opacity-50"

>


{

loading ?

<>

<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>

Classifying...

</>


:

<>

<Sparkles/>

Analyze News

</>

}



</motion.button>




<div className="grid grid-cols-3 gap-3 mt-12">


<div className="bg-slate-950 p-4 rounded-2xl text-center">

<Newspaper className="mx-auto text-cyan-400"/>

<p className="text-white mt-2">
Business
</p>

</div>



<div className="bg-slate-950 p-4 rounded-2xl text-center">

<Zap className="mx-auto text-green-400"/>

<p className="text-white mt-2">
Sports
</p>

</div>




<div className="bg-slate-950 p-4 rounded-2xl text-center">

<Sparkles className="mx-auto text-pink-400"/>

<p className="text-white mt-2">
Technology
</p>

</div>


</div>



</motion.div>


</div>

</section>


)

}


export default PredictionBox;