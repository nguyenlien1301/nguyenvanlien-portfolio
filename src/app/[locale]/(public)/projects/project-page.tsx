"use client";

import BreadcrumbComponent from "@/components/common/breadcrumb-component";
import ProductCard from "@/components/common/product-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/shared/data/projects";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

function ProjectContainer() {
  const t = useTranslations("Projects");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Web App", "Mobile", "E-commerce", "Landing Page"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => {
          project.category === selectedCategory;
          console.log(project.category, selectedCategory);
        });
  return (
    <section className="py-15 bg-gray-50 dark:bg-gray-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              {t("description")}
            </p>
          </motion.div>
        </div>
        {/* <div className="flex items-center justify-center"> */}
        <BreadcrumbComponent title="Project" className="self-start" />
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 dark:text-white mt-5">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "dark:bg-white dark:text-black"
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        {/* </div> */}
        <ProductCard projects={filteredProjects} t={t} />
      </div>
    </section>
  );
}

export default ProjectContainer;
