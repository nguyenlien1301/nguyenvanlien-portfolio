import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/nguyenlien1301?tab=repositories",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nguyyenvanlien/",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:nguyenvanlien130102@gmail.com",
    color: "hover:text-red-500",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+84978913405",
    color: "hover:text-green-500",
  },
];
