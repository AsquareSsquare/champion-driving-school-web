"use client";

import { navItems } from "@/constants/data";
import { scrollToSection } from "@/lib/utils";

function FooterNavItems() {
  return (
    <div className="space-y-2">
      {navItems.map((link) => (
        <button
          key={link}
          onClick={() => scrollToSection(link.toLowerCase())}
          className="block text-slate-400 hover:text-blue-300 transition-colors duration-200 capitalize"
        >
          {link}
        </button>
      ))}
    </div>
  );
}

export default FooterNavItems;
