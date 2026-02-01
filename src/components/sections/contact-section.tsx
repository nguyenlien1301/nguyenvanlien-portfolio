"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import SectionTitle from "../common/section-title";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const t = useTranslations("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      // Replace these with your actual EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        "service_0amjkhh",
        "template_uatp4r2",
        formRef.current,
        "sJCiApt_3DOlalzlz",
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title={t("title")} desc={t("subtitle")} />
        <div className="flex flex-col md:flex-row gap-10 mt-15">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t("infoTitle")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://img.icons8.com/bubbles/100/000000/apple-mail.png"
                    alt="nguyenvanlien-email"
                    className="object-cover"
                    width={80}
                    height={80}
                  />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:nguyenvanlien130102@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      nguyenvanlien130102@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Image
                  src="https://img.icons8.com/?size=100&id=CCDYqb5KK5vI&format=png&color=000000"
                  alt="nguyenvanlien-phone"
                  className="object-cover"
                  width={80}
                  height={80}
                />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("phone")}
                  </p>
                  <a
                    href="tel:+84978913405"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    0978 913 405
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
                  alt="nguyenvanlien-facebook"
                  className="object-cover"
                  width={80}
                  height={80}
                />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Facebook</p>
                  <a
                    href="https://www.facebook.com/nguyenvanlien1312"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    https://www.facebook.com/nguyenvanlien1312
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Image
                  src="https://img.icons8.com/bubbles/100/000000/linkedin.png"
                  alt="nguyenvanlien-linkedin"
                  className="object-cover"
                  width={80}
                  height={80}
                />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/nguyyenvanlien/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    https://www.linkedin.com/in/nguyyenvanlien/
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("form.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg  focus:ring-primary focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2  transition-all duration-300"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("form.subjectLabel")}
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder={t("form.subjectPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t("form.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder={t("form.messagePlaceholder")}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle size={18} className="mr-2 animate-pulse" />
                    {t("form.sendMessage")}
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    {t("form.submit")}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
