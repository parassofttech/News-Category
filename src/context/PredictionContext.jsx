import { createContext, useContext, useState } from "react";

const PredictionContext = createContext();

export const PredictionProvider = ({ children }) => {

    const [prediction, setPrediction] = useState(null);

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(false);

    return (

        <PredictionContext.Provider
            value={{
                prediction,
                setPrediction,

                history,
                setHistory,

                loading,
                setLoading
            }}
        >

            {children}

        </PredictionContext.Provider>

    );

};

export const usePrediction = () => useContext(PredictionContext);