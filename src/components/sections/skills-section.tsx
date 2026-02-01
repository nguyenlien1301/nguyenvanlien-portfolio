"use client";
import { skillGroups } from "@/shared/data/skills";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionTitle from "../common/section-title";
const SkillsSection = () => {
  const t = useTranslations("Skills");
  return (
    <section id="skills" className="py-10 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-700/20 blur-3xl"></div>
      {/* Skills Section */}
      <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-blue-300/20 dark:bg-blue-700/20 blur-3xl"></div>
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-15"
        >
          <h2 className="mb-2 md:mb-5 text-2xl font-bold text-center text-gray-900 dark:text-white">
            Kỹ năng của tôi
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Đây là những công nghệ và kỹ năng mà tôi đã học và sử dụng trong quá
            trình phát triển các dự án.
          </p>
        </motion.div> */}
        <SectionTitle title={t("title")} desc={t("description")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {skillGroups.map((group, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center pb-3 border-b border-gray-200 dark:border-gray-600">
                  {group.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-x-8 gap-y-6">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className="flex items-center justify-center w-16 h-16 p-3 mb-3 transition-all duration-300 transform shadow-lg rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}44)`,
                          borderBottom: `3px solid ${skill.color}`,
                          boxShadow: `0 10px 15px -3px ${skill.color}22, 0 4px 6px -4px ${skill.color}44`,
                        }}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className="object-contain w-10 h-10 filter drop-shadow-md"
                          loading="lazy"
                          width={40}
                          height={40}
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {skill?.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
