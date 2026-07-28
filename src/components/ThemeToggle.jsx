import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {

    const [dark, setDark] = useState(true);

    useEffect(() => {

        if (dark) {

            document.documentElement.classList.add("dark");

        } else {

            document.documentElement.classList.remove("dark");

        }

    }, [dark]);

    return (

        <button

            onClick={() => setDark(!dark)}

            className="w-14 h-14 rounded-full bg-white/10 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center shadow-xl"

        >

            {

                dark

                ?

                <Sun
                    size={24}
                    className="text-yellow-400"
                />

                :

                <Moon
                    size={24}
                    className="text-slate-900"
                />

            }

        </button>

    );

};

export default ThemeToggle;