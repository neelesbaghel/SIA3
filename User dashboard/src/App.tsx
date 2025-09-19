import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { StatsCard } from "./components/StatsCard";
import { ProgressChart } from "./components/ProgressChart";
import { DailyTip } from "./components/DailyTip";
import { AIChatPage } from "./components/pages/AIChatPage";
import { StressMonitorPage } from "./components/pages/StressMonitorPage";
import { BreathingPage } from "./components/pages/BreathingPage";
import { MoodTrackerPage } from "./components/pages/MoodTrackerPage";
import { MiniGamesPage } from "./components/pages/MiniGamesPage";
import { EmergencyPage } from "./components/pages/EmergencyPage";
import { Button } from "./components/ui/button";
import { 
  Heart, 
  Smile, 
  Wind, 
  Gamepad2,
  BarChart3,
  Calendar,
  Moon,
  Sun
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        {/* Sidebar */}
        <Sidebar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        
        {/* Main Content */}
        <div className="flex-1 p-8 ml-64">
          {currentPage === "Dashboard" && (
            <>
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                    <div>
                      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Dashboard
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monitor your mental wellness and get support when you need it
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button
                    onClick={toggleDarkMode}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {darkMode ? 'Light' : 'Dark'}
                  </Button>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">Stress: 6/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 bg-[rgba(204,159,217,0.44)]" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h2 className="text-4xl font-bold">Welcome back! 👋</h2>
                      <p className="text-purple-100 text-lg">{currentDate}</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-4 max-w-md">
                        <div className="bg-white h-2 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-100 mb-1">Wellness Score</div>
                      <div className="text-5xl font-bold">100</div>
                      <div className="text-emerald-300 font-semibold">Excellent</div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute top-20 -left-8 w-16 h-16 bg-white/5 rounded-full" />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Current Stress"
                  value="6/10"
                  subtitle="Moderate"
                  icon={Heart}
                  gradient="bg-gradient-to-r from-orange-400 to-red-500"
                  status="Logged"
                  statusColor="bg-gray-800"
                />
                <StatsCard
                  title="Mood Today"
                  value="✓"
                  subtitle="Weekly avg: 2.8/4"
                  icon={Smile}
                  gradient="bg-gradient-to-r from-emerald-400 to-green-500"
                />
                <StatsCard
                  title="Breathing Today"
                  value="2"
                  subtitle="Goal: 3 sessions"
                  icon={Wind}
                  gradient="bg-gradient-to-r from-cyan-400 to-blue-500"
                />
                <StatsCard
                  title="Games Today"
                  value="1"
                  subtitle="Mindful activities"
                  icon={Gamepad2}
                  gradient="bg-gradient-to-r from-purple-400 to-indigo-500"
                  status="Active"
                  statusColor="bg-emerald-500"
                />
              </div>

              {/* Weekly Progress Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Weekly Progress</h2>
                </div>
                <ProgressChart />
              </div>

              {/* Today's Recommendations */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Today's Recommendations</h2>
                <DailyTip />
              </div>
            </>
          )}

          {currentPage === "AI Chat" && <AIChatPage />}
          {currentPage === "Stress Monitor" && <StressMonitorPage />}
          {currentPage === "Breathing" && <BreathingPage />}
          {currentPage === "Mood Tracker" && <MoodTrackerPage />}
          {currentPage === "Mini Games" && <MiniGamesPage />}
          {currentPage === "Emergency" && <EmergencyPage />}
        </div>
      </div>
    </div>
  );
}