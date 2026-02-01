"use client";
import { experiences } from "@/shared/data/experiences";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies ve had the pleasure to
            work with.
          </p>
        </motion.div>

        <VerticalTimeline
          lineColor="currentColor"
          className="text-gray-700 dark:text-gray-300"
        >
          {experiences.map((experience) => {
            const IconComponent = LucideIcons[
              experience.icon as keyof typeof LucideIcons
            ] as React.FC<React.SVGProps<SVGSVGElement>>;

            return (
              <VerticalTimelineElement
                key={experience.id}
                className="vertical-timeline-element"
                contentStyle={{
                  background: "var(--bg-card, #ffffff)",
                  color: "var(--text-primary, #1f2937)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border-color, #e5e7eb)",
                  visibility: "visible",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--bg-card, #ffffff)",
                }}
                date={experience.date}
                iconStyle={{
                  background: "var(--icon-bg, #3b82f6)",
                  color: "#ffffff",
                  boxShadow: "0 0 0 4px var(--icon-border, #93c5fd)",
                  visibility: "visible",
                }}
                icon={<IconComponent />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                  {experience.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg text-blue-600 dark:text-blue-400 mt-1">
                  {experience.company}
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
