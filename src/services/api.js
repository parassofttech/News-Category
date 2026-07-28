import axios from "axios";

const API = axios.create({

    baseURL: "https://news-category-backend.onrender.com/api"
    
});



// ==========================
// Prediction
// ==========================

export const predictNews = async (news) => {

    const res = await API.post("/prediction", {

        news

    });

    return res.data;

};



// ==========================
// History
// ==========================

export const getHistory = async () => {

    const res = await API.get("/history");

    return res.data;

};



// ==========================
// Delete History
// ==========================

export const deleteHistory = async () => {

    const res = await API.delete("/history");

    return res.data;

};



// ==========================
// Dataset
// ==========================

export const getDataset = async () => {

    const res = await API.get("/dataset");

    return res.data;

};

export default API;