"use client";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div
              className="text-xl font-bold hover:scale-110 transition-all duration-300 ease-in-out flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-10 h-10 mr-2"
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
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold">
                FEDev
              </span>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold mb-2">Nguyễn Văn Liền</h3>
              <p className="text-gray-400">Lập trình viên Front-end</p>
            </div>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/nguyenlien1301"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nguyyenvanlien/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nguyenvanlien130102@gmail.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+84978913405"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-gray-400">
              Được thực hiện <Heart size={16} className="mx-1 text-red-500" />{" "}
              năm {currentYear}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Nguyễn Văn Liền. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
