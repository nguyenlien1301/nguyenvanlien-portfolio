"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ProjectContainer() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web App", "Mobile", "E-commerce", "SaaS"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "E-commerce",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
      fullDescription:
        "Built a comprehensive e-commerce solution using Next.js, Stripe for payments, and Supabase for the backend. Features include product catalog, shopping cart, order management, user authentication, admin dashboard, and real-time analytics. The platform handles thousands of products and processes hundreds of transactions daily.",
      image: "/images/projects/project-1.jpg",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Supabase"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management SaaS",
      category: "SaaS",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      fullDescription:
        "Developed a modern task management SaaS application with real-time collaboration, project organization, deadline tracking, and team communication. Built with React, Node.js, Socket.io for real-time features, and MongoDB for data persistence. Includes subscription management, user roles, and comprehensive reporting.",
      image: "/images/projects/project-2.jpg",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile",
      description:
        "A secure mobile banking application with biometric authentication and real-time transactions.",
      fullDescription:
        "Created a secure mobile banking application using React Native with advanced security features including biometric authentication, transaction encryption, and fraud detection. Integrated with banking APIs for real-time balance updates, transaction history, bill payments, and money transfers. Compliant with financial regulations and security standards.",
      image: "/images/projects/project-3.jpg",
      tech: ["React Native", "Redux", "Node.js", "JWT", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "Web App",
      description:
        "An analytics dashboard for social media management with scheduling and performance tracking.",
      fullDescription:
        "Built a comprehensive social media management dashboard that aggregates data from multiple platforms (Twitter, Instagram, Facebook, LinkedIn). Features include post scheduling, engagement analytics, audience insights, competitor analysis, and automated reporting. Used Vue.js for the frontend and Python/Django for the backend with Redis for caching.",
      image: "/images/projects/project-4.jpg",
      tech: ["Vue.js", "Python", "Django", "Redis", "Chart.js"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web App",
      description:
        "A modern real estate platform with property listings, virtual tours, and mortgage calculator.",
      fullDescription:
        "Developed a full-stack real estate platform with advanced search filters, interactive maps, virtual property tours, and integrated mortgage calculator. Built with Next.js and TypeScript for the frontend, Node.js and Express for the API, and MongoDB for data storage. Includes user authentication, property management for agents, and CRM functionality.",
      image: "/images/projects/project-5.jpg",
      tech: ["Next.js", "TypeScript", "Express", "MongoDB", "Mapbox"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "SaaS",
      description:
        "An educational platform with course creation, progress tracking, and interactive assessments.",
      fullDescription:
        "Built a comprehensive learning management system for online education with course creation tools, video streaming, interactive quizzes, progress tracking, and certification generation. Features include student-teacher communication, assignment submission, grading systems, and detailed analytics. Deployed on AWS with CDN for global content delivery.",
      image: "/images/projects/project-6.jpg",
      tech: ["React", "AWS", "Lambda", "DynamoDB", "CloudFront"],
      github: "#",
      demo: "#",
      featured: true,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-15 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              A showcase of my recent work and the technologies ve used to bring
              ideas to life
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 dark:text-white">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`mb-2 ${
                selectedCategory === category
                  ? "dark:bg-white dark:text-black"
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex"
            >
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none flex-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 shrink-0"
                    width={300}
                    height={300}
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 left-2 bg-white z-10">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors dark:text-white">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-transparent rounded-full border !border-secondary text-sm font-medium shadow-[0_0_8px_theme('colors.secondary')] text-secondary dark:text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge className="bg-transparent rounded-full border !border-secondary text-sm font-medium shadow-[0_0_8px_theme('colors.secondary')] text-secondary dark:text-white">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full dark:text-white dark:hover:bg-gray-900 border-gray-500 hover:bg-secondary hover:text-white"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-white dark:bg-gray-800">
                        <DialogHeader>
                          <DialogTitle className="text-2xl dark:text-white text-black">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                            width={300}
                            height={300}
                          />
                          <p className="mb-4 text-gray-600 dark:text-gray-400">
                            {project.fullDescription}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-2 dark:text-white">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-white"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            <Button asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
