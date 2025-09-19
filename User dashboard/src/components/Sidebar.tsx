import {
  LayoutDashboard,
  MessageCircle,
  Heart,
  Wind,
  Smile,
  Gamepad2,
  Phone,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "./ui/button";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "AI Chat", icon: MessageCircle },
  { name: "Stress Monitor", icon: Heart },
  { name: "Breathing", icon: Wind },
  { name: "Mood Tracker", icon: Smile },
  { name: "Mini Games", icon: Gamepad2 },
  { name: "Emergency", icon: Phone },
];

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({
  darkMode,
  toggleDarkMode,
  currentPage,
  onPageChange,
}: SidebarProps) {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-purple-400 via-purple-300 to-indigo-400 text-white p-6 flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">SIA</h1>
          <p className="text-purple-200 text-sm">
            Mental Health Companion
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 bg-[rgba(0,0,0,0)]">
        <p className="text-purple-300 text-sm mb-4 uppercase tracking-wider">
          Navigation
        </p>
        {navigation.map((item) => (
          <Button
            key={item.name}
            onClick={() => onPageChange(item.name)}
            variant={currentPage === item.name ? "secondary" : "ghost"}
            className={`w-full justify-start gap-3 h-12 ${
              currentPage === item.name
                ? "bg-white/30 text-gray-900 hover:bg-white/40 backdrop-blur-sm font-semibold"
                : "text-gray-700 hover:text-gray-900 hover:bg-white/20"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Button>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="mt-auto">
        <Button
          onClick={toggleDarkMode}
          variant="ghost"
          className="w-full justify-start gap-3 h-12 text-purple-200 hover:text-white hover:bg-white/10"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </div>
  );
}