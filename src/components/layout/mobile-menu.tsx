"use client";

import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import Language from "../common/language";

interface MobileMenuProps {
  currentLang?: string;
  onLanguageChange?: (lang: string) => void;
}

export function MobileMenu({
  currentLang = "vi",
  onLanguageChange,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home", highlight: true },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    window.location.hash = href;
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50  p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/80 transition-all duration-300 lg:hidden cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-4 h-4 text-white" />
        ) : (
          <Menu className="w-4 h-4 text-white" />
        )}
      </button>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#0a0e1a] transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        >
          <div className="absolute top-6 right-6">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />
            </div>
          </div>

          <div className="h-full overflow-y-auto px-8 py-20">
            <div className="max-w-2xl mx-auto space-y-12">
              <div className="space-y-1">
                <p className="text-slate-400 text-sm tracking-wider uppercase">
                  Web Dev
                </p>
                <h2 className="text-white text-2xl font-medium">
                  Nguyen Van Lien
                </h2>
              </div>

              <div className="space-y-1">
                <p className="text-slate-500 text-sm tracking-wider uppercase">
                  Social sites
                </p>
                <div className="space-y-1">
                  <a
                    href="https://www.facebook.com/nguyenvanlien1312"
                    target="_blank"
                    className="block text-white text-xl font-medium hover:text-cyan-400 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://chat.zalo.me/"
                    target="_blank"
                    className="block text-white text-xl font-medium hover:text-cyan-400 transition-colors"
                  >
                    Zalo
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-slate-500 text-sm tracking-wider uppercase">
                  Contact me
                </p>
                <div className="space-y-1">
                  <a
                    href="mailto:Vongocdiem.work@gmail.com"
                    className="block text-white text-xl font-medium hover:text-cyan-400 transition-colors"
                  >
                    nguyenvanlien130102@gmail.com
                  </a>
                  <a
                    href="tel:+84978913405"
                    className="block text-white text-xl font-medium hover:text-cyan-400 transition-colors"
                  >
                    +84 978 913 405
                  </a>
                </div>
              </div>

              <nav className="space-y-2 pt-8 border-t border-slate-800">
                {menuItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left font-bold text-5xl md:text-6xl lg:text-7xl transition-all duration-300 hover:translate-x-4 ${
                      item.highlight
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-400"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-3 pt-3 pb-8">
                <Globe className="w-5 h-5 text-slate-400" />
                <div className="flex flex-col gap-2 w-32 sm:w-36">
                  <Language />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
