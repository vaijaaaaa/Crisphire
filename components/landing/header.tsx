"use client";

import { Button } from "@/components/ui/button";

const navigation = [
  { name: "How it Works", href: "#" },
  { name: "Features", href: "#" },
  { name: "FAQ", href: "#" },
];

export function Header() {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-4 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-5 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-6 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-5 bg-gray-800 rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight font-montserrat">CRISPHIRE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors font-montserrat"
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-gray-900 text-white hover:bg-black rounded-lg px-6 py-2.5 text-sm font-bold shadow-sm font-montserrat"
            >
              Book a demo
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}