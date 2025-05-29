"use client";
import ImageDisplaySection from "@/components/image-display-section";
import TransformationSection from "@/components/transformation-section";
import TransformedImageSection from "@/components/transformed-image-section";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 mb-4 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300"
            >
              BackgroundGone AI
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg mt-4">
            Transform your images with the power of AI
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
          >
            <ImageDisplaySection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
          >
            <TransformationSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
          >
            <TransformedImageSection />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Powered by ImageKit.io and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </main>
  );
}
