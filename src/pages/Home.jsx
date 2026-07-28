import { useState } from "react";

import Hero from "../home/Hero";

import CategoryCard from "../components/CategoryCard";
import CTASection from "../home/CTASection";
import FAQ from "../home/FAQ";
import Features from "../home/Features";
import SupportedCategories from "../home/SupportedCategories";




const Home = () => {

   

    const categories = [

        {
            category: "sport",
            total: 20,
            description: "Predict sports related news using AI and Machine Learning."
        },

        {
            category: "business",
            total: 20,
            description: "Classify finance, stock market and business news instantly."
        },

        {
            category: "tech",
            total: 20,
            description: "Analyze technology, AI, gadgets and software related articles."
        },

        {
            category: "politics",
            total: 20,
            description: "Identify government, election and political news accurately."
        },

        {
            category: "entertainment",
            total: 20,
            description: "Detect movies, music, celebrity and entertainment articles."
        }

    ];


   


    return (

        <>
            <div className="bg-linear-to-br from-slate-950/90 via-emerald-950/80 to-slate-950/90">
            <Hero />

            

            

            <SupportedCategories/>
            <Features/>
            <CTASection/>
            <FAQ/>

            </div>

        </>

    );

};

export default Home;