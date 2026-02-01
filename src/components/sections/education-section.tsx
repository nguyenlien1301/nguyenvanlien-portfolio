"use client";
import { education } from "@/shared/data";
import { EducationData } from "@/types/education";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionTitle from "../common/section-title";

const EducationSection = () => {
  const t = useTranslations("Education");
  const getEducationIcon = (type: string) => {
    switch (type) {
      case "degree":
        return <GraduationCap className="w-5 h-5" />;
      case "certification":
        return <Award className="w-5 h-5" />;
      case "diploma":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  const getEducationColor = (type: string) => {
    switch (type) {
      case "degree":
        return "from-blue-500 to-purple-600";
      case "certification":
        return "from-green-500 to-teal-600";
      case "diploma":
        return "from-orange-500 to-red-600";
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  // Chia education thành 2 cột
  const leftColumnEducation = education.filter((_, index) => index % 2 === 0);
  const rightColumnEducation = education.filter((_, index) => index % 2 === 1);

  const EducationCard = ({
    edu,
    index,
    isLast,
  }: {
    edu: EducationData;
    index: number;
    isLast: boolean;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative flex items-start group mb-6"
      >
        {/* Vertical Timeline Line */}
        {!isLast && (
          <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 z-0"></div>
        )}

        {/* Timeline Node */}
        <div
          className={`relative z-10 shrink-0 w-12 h-12 bg-linear-to-r ${getEducationColor(
            edu.type,
          )} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="text-white">{getEducationIcon(edu.type)}</div>
          {/* Pulse Animation */}
          <div
            className={`absolute inset-0 bg-linear-to-r ${getEducationColor(
              edu.type,
            )} rounded-xl animate-ping opacity-20`}
          ></div>
        </div>

        {/* Content Card */}
        <div className="ml-6 flex-1 bg-white dark:bg-gray-700 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-300 dark:group-hover:border-blue-500">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {t(edu.degree)}
            </h4>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
              <Calendar size={12} className="mr-1" />
              {edu.year}
            </div>
          </div>

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {t(edu.school)}
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
            {t(edu.description)}
          </p>

          {/* Achievement Badge */}
          {(edu.gpa || edu.credential || edu.achievement) && (
            <div className="inline-flex items-center bg-linear-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 text-green-700 dark:text-green-300 text-xs font-medium px-3 py-1 rounded-full">
              <Award size={12} className="mr-1" />
              {edu.gpa || edu.credential || edu.achievement}
            </div>
          )}
        </div>
      </motion.div>
    );
  };
  return (
    <section
      id="education"
      className="relative py-10 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle title={t("title")} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mt-10">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnEducation.map((edu, index) => (
              <EducationCard
                key={edu.id}
                edu={edu}
                index={index}
                isLast={index === leftColumnEducation.length - 1}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnEducation.map((edu, index) => (
              <EducationCard
                key={edu.id}
                edu={edu}
                index={index + leftColumnEducation.length}
                isLast={index === rightColumnEducation.length - 1}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-300/20 dark:bg-purple-700/20 blur-3xl"></div>
    </section>
  );
};

export default EducationSection;
