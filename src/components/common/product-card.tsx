"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/types/project.type";
import { ExternalLink, Eye, Github, Play, X } from "lucide-react";
import { _Translator } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import EmtyData from "./emty-data";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   fullDescription: string;
//   category: string;
//   tech: string[];
//   featured?: boolean;
//   image: string;
//   videoUrl?: string;
//   demoVideoUrl?: string;
//   demo: string;
//   github: string;
//   createdAt?: string;
// }

interface ProjectsSectionCustomProps {
  projects: Project[];
  t: _Translator;
}

function ProductCard({ projects, t }: ProjectsSectionCustomProps) {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const handleVideoDemo = () => {
    setIsHovered(null); // đoạn thêm
    setShowDetailModal(false);
    setTimeout(() => {
      setShowVideoModal(true);
    }, 200);
  };

  //   useEffect(() => {
  //     const video = videoRefs.current[isHovered || ""];
  //     if (video) {
  //       if (isHovered) {
  //         video.play().catch(() => {});
  //       } else {
  //         video.pause();
  //         video.currentTime = 0;
  //       }
  //     }
  //   }, [isHovered]);
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      const numericId = Number(id);
      if (!video) return;
      if (video) {
        if (numericId === isHovered) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0; // ← Reset video cũ về 0
        }
      }
    });
  }, [isHovered]);
  return (
    <>
      {projects.length === 0 && (
        <EmtyData title="No Project" className="mt-10" />
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
        {projects.map((project) => {
          const baseKey = `items.${project.key}`;
          return (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              onMouseEnter={() => setIsHovered(project.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                {project.videoUrl ? (
                  <>
                    <Image
                      src={project.image}
                      alt={t(`${baseKey}.title`)}
                      className={`w-full h-48 object-cover transition-opacity duration-300 ${
                        isHovered === project.id ? "opacity-0" : "opacity-100"
                      }`}
                      width={1200}
                      height={600}
                    />
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[project.id] = el;
                      }}
                      src={project.videoUrl}
                      className={`absolute inset-0 w-full h-48 object-cover transition-opacity duration-300 ${
                        isHovered === project.id ? "opacity-100" : "opacity-0"
                      }`}
                      loop
                      muted
                      playsInline
                    />
                  </>
                ) : (
                  <Image
                    src={project.image}
                    alt={t(`${baseKey}.title`)}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={1200}
                    height={600}
                  />
                )}
                {project.featured && (
                  <Badge className="absolute top-2 left-2 dark:bg-white z-10">
                    Featured
                  </Badge>
                )}
                {project.createdAt && (
                  <Badge className="absolute top-2 left-24 dark:bg-white z-10">
                    Mới
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
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

              <div className="flex flex-col flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors dark:text-white">
                    {t(`${baseKey}.title`)}
                  </h3>
                  <Badge variant="secondary" className="text-white text-xs">
                    {t(`${baseKey}.category`)}
                  </Badge>
                </div>

                <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400 flex-1">
                  {t(`${baseKey}.description`)}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-transparent rounded-full border border-blue-500! text-sm font-medium shadow-[0_0_8px_var(--color-blue-500)] text-blue-500 dark:text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge className="bg-transparent rounded-full border border-blue-500! text-sm font-medium shadow-[0_0_8px_var(--color-blue-500)] text-blue-500 dark:text-white">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <Dialog
                  open={showDetailModal && selectedProject?.id === project.id}
                  onOpenChange={(open) => {
                    setShowDetailModal(open);
                    if (open) {
                      setSelectedProject(project);
                    } else {
                      setIsHovered(null); //đoạn thêm
                    }
                  }}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full dark:text-white dark:hover:bg-gray-900 border-gray-500 hover:bg-blue-500 hover:text-white cursor-pointer"
                      onClick={() => {
                        setSelectedProject(project);
                        setShowDetailModal(true);
                        setIsHovered(null); // đoạn thêm
                      }}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {t("buttonView")}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-gray-800 max-w-[calc(100%-5rem)]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl dark:text-white text-black">
                        {t(`${baseKey}.title`)}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
                      <Image
                        src={project.image}
                        alt={t(`${baseKey}.title`)}
                        className="w-full h-64 object-cover rounded-lg"
                        width={500}
                        height={64}
                      />
                      <p className="mb-4 text-gray-600 dark:text-gray-400">
                        {t(`${baseKey}.fullDescription`)}
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
                      <div className="flex gap-3">
                        <Button asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Source Code
                          </a>
                        </Button>
                        {project.demoVideoUrl && (
                          <Button
                            onClick={handleVideoDemo}
                            className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                          >
                            <Play className="h-4 w-4 mr-1" />
                            Video Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <Dialog
          open={showVideoModal}
          onOpenChange={(open) => {
            setShowVideoModal(open);
            if (!open) {
              setIsHovered(null); // ← THÊM: Dừng video khi đóng
            }
          }}
        >
          <DialogContent className="max-w-4xl md:max-w-5xl bg-black border-slate-800 p-0 w-[95vw] md:w-full h-auto max-h-[90vh]">
            <DialogTitle></DialogTitle>
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-5 w-5 text-white" />
              <span className="sr-only">Close</span>
            </button>

            <div className="relative aspect-video w-full">
              <video
                src={selectedProject.demoVideoUrl}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default ProductCard;
