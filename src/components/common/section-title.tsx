"use client";
import { motion } from "framer-motion";
import React from "react";

const SectionTitle = ({
  title,
  desc,
}: {
  title: string;
  desc?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-5 md:mt-10"
    >
      <h2 className="text-3xl md:text-3xl text-center font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
      {desc && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          {desc}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
