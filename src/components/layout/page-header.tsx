"use client";

import { motion } from "framer-motion";
import Language from "../common/language";
import ModeToggle from "../common/mode-toggle";
import { MobileMenu } from "./mobile-menu";

const PageHeader = () => {
  // const { handleSearchData } = useQueryString();
  // 🕐 Hàm xác định thời gian trong ngày
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return { text: "Good morning 🌤️", theme: "morning" };
    if (hour < 18) return { text: "Good afternoon 🌇", theme: "afternoon" };

    return { text: "Good evening 🌙", theme: "evening" };
  };
  const greeting = getGreeting();

  const greetingClass =
    greeting.theme === "morning" || greeting.theme === "afternoon"
      ? "bg-linear-to-r from-orange-500 to-amber-500"
      : "bg-linear-to-r from-slate-700 to-slate-900";
  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center bg-linear-to-br from-orange-200 to-white
          dark:bg-linear-to-br dark:from-gray-700 dark:to-black
          backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="size-6 md:size-10 mr-2"
              whileHover={{ rotate: 10 }}
            >
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/code-5806767-4863042.png"
                alt="FEDev Logo"
                className="w-full h-full object-contain"
                width="40"
                height="40"
              />
            </motion.div>
            <span className="bg-linear-to-r text-sm md:text-xl from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold">
              FEDev
            </span>
          </motion.a>
          {/* Darkmode toggle */}
          <div className="flex item-center gap-5">
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center text-xs px-1 py-0 md:px-3 md:py-1 font-semibold rounded-full bg-linear-to-r text-white shadow-md hover:shadow-lg transition-shadow ${greetingClass}`}
            >
              {greeting.text}
            </motion.button>
            <ModeToggle />
            <div className="hidden lg:flex flex-col gap-2 w-32 sm:w-36">
              <Language />
            </div>
          </div>
        </div>
      </motion.nav>
      <MobileMenu />
    </div>
  );
};

export default PageHeader;
