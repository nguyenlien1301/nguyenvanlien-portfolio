"use client";

import { menuItems } from "@/shared/constants/menu-constant";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Language from "../common/language";
import ModeToggle from "../common/mode-toggle";
import { MobileMenu } from "./mobile-menu";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // const locale = params.locale as Locale;
  const t = useTranslations("Navbar");
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) setActiveSection(hash);
  }, []);

  const handleNavClick = (itemName: string) => {
    const section = itemName.toLowerCase();
    setActiveSection(section);
    window.location.hash = section;
  };
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
            href="#"
            className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="w-10 h-10 mr-2" whileHover={{ rotate: 10 }}>
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/code-5806767-4863042.png"
                alt="FEDev Logo"
                className="w-full h-full object-contain"
                width="40"
                height="40"
              />
            </motion.div>
            <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold">
              FEDev
            </span>
          </motion.a>
          {/* Navigation Item */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              return (
                <a
                  key={item.key}
                  // href={`${locale}/${item.href}`}
                  href={item.href}
                  className="relative"
                  onClick={() => handleNavClick(item.key)}
                >
                  <motion.span
                    className={`transition-colors text-sm duration-300 uppercase font-semibold ${
                      activeSection === item.key.toLowerCase()
                        ? "text-orange-600 dark:text-orange-400"
                        : `text-gray-800 dark:text-gray-300 hover:text-orange-500`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(`${item.key}`)}
                  </motion.span>
                  {activeSection === item.key.toLowerCase() && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full from-orange-500 to-amber-500`}
                    ></motion.div>
                  )}
                </a>
              );
            })}
          </div>
          {/* Darkmode toggle */}
          <div className="flex item-center gap-5">
            <div className="hidden lg:flex flex-col gap-2 w-32 sm:w-36">
              <Language />
            </div>
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center text-xs px-3 py-1 font-semibold rounded-full bg-linear-to-r text-white shadow-md hover:shadow-lg transition-shadow ${greetingClass}`}
            >
              {greeting.text}
            </motion.button>
            <ModeToggle />
          </div>
        </div>
      </motion.nav>
      <MobileMenu />
    </div>
  );
};

export default Header;
