import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";

import { PredictionProvider } from "./context/PredictionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <BrowserRouter>

            <PredictionProvider>

                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />

                <App />

            </PredictionProvider>

        </BrowserRouter>

    </React.StrictMode>
);