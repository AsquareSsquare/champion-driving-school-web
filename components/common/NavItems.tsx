"use client";
import { navItems } from "@/constants/data";
import { useEffect, useState } from "react";
import { cn, scrollToSection } from "@/lib/utils";

function NavItems() {
  const [activeSection, setActiveSection] = useState("home");
  const handleScroll = () => {
    const current = navItems.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      }
      return false;
    });
    if (current) setActiveSection(current);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="hidden lg:flex gap-6">
      {navItems.map((navItem) => (
        <button
          key={navItem}
          onClick={() => scrollToSection(navItem)}
          className={cn(
            "capitalize px-3 py-2 text-sm font-medium transition-colors duration-200" +
              " relative group text-gray-700 hover:text-gray-900",
            { "text-gray-900": activeSection === navItem },
          )}
        >
          {navItem}
          {activeSection === navItem && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></div>
          )}
          {/* Hover animation border */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-400 ease-out"></div>
        </button>
      ))}
    </nav>
  );
}

export default NavItems;
