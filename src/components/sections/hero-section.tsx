"use client";
import { motion } from "framer-motion";
import { ArrowDown, DownloadIcon, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import EarthRotate from "./earth-rotate";

const HeroSection = () => {
  const t = useTranslations("Hero");
  const b = useTranslations("Buttons");

  const name = t("name");
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (index < name.length) {
            setDisplayedText((prev) => prev + name[index]);
            setIndex(index + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 5000);
          }
        } else {
          if (index > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            setIndex(index - 1);
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 100 : 150,
    );

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 z-0 md:hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>

        {/* Floating Shapes */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>

        {/* Geometric Shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-300 dark:bg-yellow-600 transform rotate-45 opacity-60 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-green-300 dark:bg-green-600 transform rotate-45 opacity-50 animate-spin"
          style={{ animationDuration: "10s", animationDirection: "reverse" }}
        ></div>

        {/* Floating Particles */}
        <div
          className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-80 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-3 h-3 bg-purple-400 dark:bg-purple-500 rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 dark:bg-pink-500 rounded-full opacity-70 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M0,20 Q25,10 50,20 T100,20"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,80 Q25,70 50,80 T100,80"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>
      </div>
      <div className="container relative px-4 mx-auto">
        {/* Gradient Blobs */}
        <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-blue-300/20 dark:bg-blue-700/20 blur-3xl"></div>
        <div className="absolute rounded-full top-10 left-1/2 w-80 h-80 bg-green-300/20 dark:bg-green-700/20 blur-3xl"></div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            className="text-center md:w-1/2 md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <div className="flex gap-6 justify-center md:justify-start">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.facebook.com/nguyenvanlien1312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
                    alt="nguyenvanlien-facebook"
                    className="object-cover"
                    width={80}
                    height={80}
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/nguyyenvanlien/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://img.icons8.com/bubbles/100/000000/linkedin.png"
                    alt="nguyenvanlien-linkedin"
                    className="object-cover"
                    width={80}
                    height={80}
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/nguyenvanlien130102/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://img.icons8.com/bubbles/100/000000/instagram.png"
                    alt="nguyenvanlien-instagram"
                    className="object-cover"
                    width={80}
                    height={80}
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:nguyenvanlien130102@gmail.com"
                >
                  <Image
                    src="https://img.icons8.com/bubbles/100/000000/apple-mail.png"
                    alt="nguyenvanlien-email"
                    className="object-cover"
                    width={80}
                    height={80}
                  />
                </motion.a>
              </div>
            </div>
            {/* <div className="relative w-32 h-32 mb-6 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 to-purple-600 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 to-purple-600 animate-ping opacity-20" />
              <div className="relative w-40 h-40 overflow-hidden mb-8 transition-all duration-500 border-4 border-blue-500 rounded-full md:mx-0 hover:border-blue-600 dark:border-blue-600 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900/30">
                <Image
                  src="/avatar.jpg"
                  alt="avatar"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  loading="eager"
                  width="160"
                  height="160"
                />
                <div className="absolute inset-0 border-4 border-blue-300 rounded-full opacity-50 dark:border-blue-800"></div>
              </div>
            </div> */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 animate-fade-in">
                {t("greeting")}
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 h-16 md:h-20">
                <motion.span
                  className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {displayedText}
                  {showCursor && <span className="animate-blink">|</span>}
                </motion.span>
              </h2>
              <h3 className="text-2xl text-gray-700 md:text-3xl dark:text-gray-300">
                {t("role")}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="mb-10 text-xl text-gray-600 dark:text-gray-400">
                {t("description")}
              </p>

              <div className="flex sm:flex-wrap justify-center gap-4 mb-12 md:justify-start relative z-10">
                <motion.a href="#contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-blue-400 bg-blue-600 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_8px_var(--color-blue-500)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer gap-2">
                    <Mail className="size-5" />
                    {b("contact")}
                  </button>
                </motion.a>

                <motion.a
                  href="/images/cv-nguyenvanlien.pdf"
                  download
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-blue-400 bg-blue-600 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_8px_var(--color-blue-500)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer gap-2">
                    <DownloadIcon className="size-5" />
                    {b("cv")}
                  </button>
                </motion.a>
              </div>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                whileHover={{ y: 5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
              >
                <ArrowDown size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          {/* 3D Icon Cloud */}
          <motion.div
            className="hidden sm:block md:w-1/2 h-100 md:h-125 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EarthRotate />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
