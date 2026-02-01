"use client";

import { Locale } from "@/config";
import { projects } from "@/shared/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import { useTranslations } from "next-intl";
import ProductCard from "../common/product-card";
import SectionTitle from "../common/section-title";

function ProjectSection() {
  const t = useTranslations("Projects");
  const params = useParams();
  const locale = params.locale as Locale;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  const latestProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3);
  return (
    <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle title={t("title")} desc={t("description")} />
        </div>
        <ProductCard projects={latestProjects} t={t} />
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link
              href={`${locale}/projects`}
              className="cursor-pointer dark:bg-white text-white dark:text-gray-800 rounded-md py-2 px-5 bg-blue-500 dark:hover:bg-blue-500 transition-all dark:hover:text-white hover:text-blue-500 hover:bg-white border-blue-500! hover:shadow-[0_0_8px_var(--color-blue-500)]"
            >
              {t("btnAll")}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
