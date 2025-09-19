import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { 
  Heart, 
  Activity, 
  TrendingDown, 
  TrendingUp, 
  Clock,
  Calendar,
  AlertTriangle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";

const stressData = [
  { time: "6 AM", stress: 3, heartRate: 65 },
  { time: "9 AM", stress: 5, heartRate: 78 },
  { time: "12 PM", stress: 7, heartRate: 85 },
  { time: "3 PM", stress: 8, heartRate: 92 },
  { time: "6 PM", stress: 6, heartRate: 75 },
  { time: "9 PM", stress: 4, heartRate: 68 },
];

const weeklyData = [
  { day: "Mon", avg: 6.2, peak: 8 },
  { day: "Tue", avg: 4.8, peak: 7 },
  { day: "Wed", avg: 7.1, peak: 9 },
  { day: "Thu", avg: 5.4, peak: 7 },
  { day: "Fri", avg: 6.8, peak: 8 },
  { day: "Sat", avg: 3.2, peak: 5 },
  { day: "Sun", avg: 3.8, peak: 6 },
];

export function StressMonitorPage() {
  const [currentStress, setCurrentStress] = useState([6]);
  const [symptoms, setSymptoms] = useState<string[]>([]);

  const stressSymptoms = [
    "Headache", "Muscle tension", "Racing thoughts", "Difficulty concentrating",
    "Irritability", "Fatigue", "Sleep problems", "Stomach issues"
  ];

  const toggleSymptom = (symptom: string) => {
    setSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const getStressLevel = (level: number) => {
    if (level <= 3) return { label: "Low", color: "text-emerald-600", bgColor: "bg-emerald-100" };
    if (level <= 6) return { label: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    if (level <= 8) return { label: "High", color: "text-orange-600", bgColor: "bg-orange-100" };
    return { label: "Very High", color: "text-red-600", bgColor: "bg-red-100" };
  };

  const currentLevel = getStressLevel(currentStress[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Stress Monitor
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track and manage your stress levels
          </p>
        </div>
      </div>

      {/* Current Stress Level */}
      <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Current Stress Level</h2>
              <p className="text-gray-600">How are you feeling right now?</p>
            </div>
            <Badge className={`${currentLevel.bgColor} ${currentLevel.color} border-0 px-4 py-2`}>
              {currentLevel.label}
            </Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Low</span>
              <span className="text-4xl font-bold text-gray-900">{currentStress[0]}/10</span>
              <span className="text-sm text-gray-600">High</span>
            </div>
            <Slider
              value={currentStress}
              onValueChange={setCurrentStress}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
            Log Stress Level
          </Button>
        </div>
      </Card>

      {/* Today's Stress Timeline */}
      <Card className="p-6 bg-white/50 backdrop-blur-sm border-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Today's Timeline</h2>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stressData}>
                <defs>
                  <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  className="text-xs text-gray-500"
                />
                <YAxis hide />
                <Area
                  type="monotone"
                  dataKey="stress"
                  stroke="#f97316"
                  strokeWidth={3}
                  fill="url(#stressGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Weekly Overview & Symptoms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Overview */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Weekly Overview</h2>
            </div>
            
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs text-gray-500"
                  />
                  <YAxis hide />
                  <Line 
                    type="monotone" 
                    dataKey="avg" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="peak" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="text-gray-600">Average</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 bg-red-500 rounded-full" />
                <span className="text-gray-600">Peak</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Symptoms Tracker */}
        <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-bold text-gray-900">Current Symptoms</h2>
            </div>
            
            <p className="text-gray-600 text-sm">Select any symptoms you're experiencing:</p>
            
            <div className="grid grid-cols-2 gap-2">
              {stressSymptoms.map((symptom) => (
                <Button
                  key={symptom}
                  onClick={() => toggleSymptom(symptom)}
                  variant={symptoms.includes(symptom) ? "default" : "outline"}
                  size="sm"
                  className={`text-xs h-10 ${
                    symptoms.includes(symptom) 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "text-gray-700 hover:bg-cyan-50"
                  }`}
                >
                  {symptom}
                </Button>
              ))}
            </div>

            {symptoms.length > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  You've selected {symptoms.length} symptom{symptoms.length > 1 ? 's' : ''}. 
                  Consider trying some breathing exercises or taking a short break.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 border-0 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <TrendingDown className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Reduce Stress</h3>
              <p className="text-sm text-gray-600">Guided relaxation exercises</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-0 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Breathing Exercise</h3>
              <p className="text-sm text-gray-600">4-7-8 technique</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-0 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Talk to SIA</h3>
              <p className="text-sm text-gray-600">Get personalized support</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}