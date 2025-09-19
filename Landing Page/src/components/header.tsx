import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
                SIA
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] hover:from-[#6d28d9] hover:to-[#db2777] text-white">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#7c3aed] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-[#7c3aed] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-[#7c3aed] transition-colors">
                How It Works
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#7c3aed] transition-colors">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#7c3aed] transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] hover:from-[#6d28d9] hover:to-[#db2777] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}