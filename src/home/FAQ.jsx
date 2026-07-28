import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is News Category Classification?",
    answer:
      "News Category Classification is an AI-powered system that automatically identifies the category of a news article, such as Sports, Business, Technology, Politics, or Entertainment.",
  },
  {
    question: "How does the AI model work?",
    answer:
      "Our model uses Natural Language Processing (NLP), TF-IDF Vectorization, and a Machine Learning classifier to analyze the text and predict the most relevant category with a confidence score.",
  },
  {
    question: "Which news categories are supported?",
    answer:
      "The current version supports five categories: Sports, Business, Technology, Politics, and Entertainment.",
  },
  {
    question: "How accurate are the predictions?",
    answer:
      "The model is trained on a labeled dataset and currently achieves around 90% accuracy on the evaluation dataset. Actual accuracy depends on the quality and type of the input news.",
  },
  {
    question: "Can I classify long news articles?",
    answer:
      "Yes. You can paste complete news articles. The model extracts meaningful words and predicts the most appropriate category.",
  },
  {
    question: "Does the system store my news?",
    answer:
      "Only if prediction history is enabled in the backend. Otherwise, the submitted news is processed only for prediction.",
  },
  {
    question: "How long does prediction take?",
    answer:
      "Most predictions are completed in less than one second, depending on your internet connection and server response time.",
  },
  {
    question: "Can I integrate this API into my own project?",
    answer:
      "Yes. The backend exposes REST APIs that can be integrated with web, mobile, or desktop applications.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden  py-24">

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 mb-8 shadow-xl">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Everything you need to know about our AI-powered News Category
            Classification platform.
          </p>
        </motion.div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <h3 className="text-xl font-semibold text-white pr-6">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`text-cyan-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: .35 }}
                  >

                    <div className="px-8 pb-7 border-t border-white/10">

                      <p className="text-gray-300 leading-8 pt-5">
                        {faq.answer}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;