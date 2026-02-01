"use client";

import { awards } from "@/shared/data/awards";
import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";

const AwardSection = () => {
  return (
    <section id="" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hoạt động
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sự công nhận, chứng nhận và các hoạt động đáng chú ý trong suốt sự
            nghiệp của tôi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <AwardIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">
                    {award.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
