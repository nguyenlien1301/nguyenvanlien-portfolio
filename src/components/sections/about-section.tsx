"use client";

import { socialLinks } from "@/shared/constants/social-links";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionTitle from "../common/section-title";

const AboutSection = () => {
  const t = useTranslations("About");
  const images = [
    "",
    // "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      {/* Gradient Blobs */}
      <div className="absolute rounded-full top-40 right-20 w-72 h-72 bg-yellow-300/20 dark:bg-yellow-700/20 blur-3xl" />
      <div className="absolute rounded-full bottom-10 left-20 w-60 h-60 bg-orange-300/20 dark:bg-orange-700/20 blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t("title")} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/robot.png"
                alt="robot"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              animate={{
                x: [0, 50, 0], // di chuyển ngang
                y: [0, 0, 0], // bay lên rồi xuống
                rotate: [0], // xoay theo hướng bay
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="flex justify-center"
            >
              <Image
                src="/images/robot-2.png"
                alt="rocket"
                width={150}
                height={150}
              />
            </motion.div>
            <div
              className="relative w-full h-100 lg:h-115 rounded-2xl from-blue-900/40 to-purple-900/30
flex items-center justify-center"
            >
              <Image
                src="/images/3d-about-me.png"
                alt="About me"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            {/* <div className="relative w-full h-75 md:h-100 lg:h-125 overflow-hidden rounded-2xl">
              <Image
                src="/images/3d-about-me.png"
                alt="About me"
                fill
                priority
                className="object-contain"
              />
            </div> */}
            {/* <div className="grid grid-cols-3 gap-4"> */}

            {/* {images && (
                <div className="space-y-4">
                  <Image
                    src={images[0]}
                    alt="About me 1"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    width={200}
                    height={32}
                  />
                  <Image
                    src={images[1]}
                    alt="About me 2"
                    className="w-full h-40 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    width={200}
                    height={40}
                  />
                </div>
              )} */}

            {/* Second Column */}
            {/* <div className="pt-8 space-y-4">
                <Image
                  src={images[2]}
                  alt="About me 3"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  width={200}
                  height={48}
                />
                <Image
                  src={images[3]}
                  alt="About me 4"
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  width={200}
                  height={32}
                />
              </div> */}

            {/* Third Column */}
            {/* <div className="space-y-4">
                <Image
                  src={images[4]}
                  alt="About me 5"
                  className="w-full h-36 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  width={200}
                  height={36}
                />
                <Image
                  src={images[5]}
                  alt="About me 6"
                  className="w-full h-44 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  width={200}
                  height={44}
                />
              </div> */}
            {/* </div> */}

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/10 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400/20 rounded-full -z-10"></div>
          </motion.div>
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {t("question")}
            </h3>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("role")}
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("paragraph1")}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("paragraph2")}
            </p>
            {/* Connect Section */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {t("connect")}
              </h4>
              <div className="relative flex flex-wrap gap-4 z-10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-gray-600 dark:text-gray-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
