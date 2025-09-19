import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { 
  Smile, 
  Frown, 
  Meh, 
  Heart,
  Calendar,
  TrendingUp,
  Plus,
  Edit3
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

interface MoodEntry {
  id: string;
  date: string;
  mood: number;
  emotions: string[];
  note: string;
  factors: string[];
}

const moodData = [
  { day: "Mon", mood: 3.5, energy: 3 },
  { day: "Tue", mood: 4.2, energy: 4 },
  { day: "Wed", mood: 2.8, energy: 2 },
  { day: "Thu", mood: 3.8, energy: 3 },
  { day: "Fri", mood: 4.5, energy: 4 },
  { day: "Sat", mood: 4.8, energy: 5 },
  { day: "Sun", mood: 4.0, energy: 4 },
];

const emotionOptions = [
  { name: "Happy", color: "bg-yellow-100 text-yellow-800", emoji: "😊" },
  { name: "Sad", color: "bg-blue-100 text-blue-800", emoji: "😢" },
  { name: "Anxious", color: "bg-orange-100 text-orange-800", emoji: "😰" },
  { name: "Excited", color: "bg-green-100 text-green-800", emoji: "🤩" },
  { name: "Calm", color: "bg-cyan-100 text-cyan-800", emoji: "😌" },
  { name: "Frustrated", color: "bg-red-100 text-red-800", emoji: "😤" },
  { name: "Grateful", color: "bg-purple-100 text-purple-800", emoji: "🙏" },
  { name: "Tired", color: "bg-gray-100 text-gray-800", emoji: "😴" },
];

const moodFactors = [
  "Sleep Quality", "Exercise", "Work Stress", "Social Time", 
  "Weather", "Diet", "Medication", "Relationships"
];

export function MoodTrackerPage() {
  const [currentMood, setCurrentMood] = useState(3);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [note, setNote] = useState("");

  const moodLabels = ["Very Low", "Low", "Okay", "Good", "Great"];
  const moodEmojis = ["😢", "😕", "😐", "😊", "😁"];
  const moodColors = ["text-red-600", "text-orange-600", "text-yellow-600", "text-green-600", "text-emerald-600"];

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const toggleFactor = (factor: string) => {
    setSelectedFactors(prev => 
      prev.includes(factor) 
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  };

  const saveMoodEntry = () => {
    // Here you would save the mood entry
    console.log({
      mood: currentMood,
      emotions: selectedEmotions,
      factors: selectedFactors,
      note: note,
      date: new Date().toISOString()
    });
    
    // Reset form
    setCurrentMood(3);
    setSelectedEmotions([]);
    setSelectedFactors([]);
    setNote("");
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 4.5) return "#10b981"; // emerald-500
    if (mood >= 3.5) return "#22c55e"; // green-500  
    if (mood >= 2.5) return "#eab308"; // yellow-500
    if (mood >= 1.5) return "#f97316"; // orange-500
    return "#ef4444"; // red-500
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
          <Smile className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Mood Tracker
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your emotions and identify patterns
          </p>
        </div>
      </div>

      {/* Today's Mood Entry */}
      <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Plus className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">How are you feeling today?</h2>
          </div>

          {/* Mood Scale */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-6xl mb-2">{moodEmojis[currentMood - 1]}</div>
              <div className={`text-2xl font-bold ${moodColors[currentMood - 1]}`}>
                {moodLabels[currentMood - 1]}
              </div>
            </div>
            
            <div className="flex justify-between items-center px-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => setCurrentMood(value)}
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl transition-all ${
                    currentMood === value 
                      ? 'border-purple-500 bg-purple-100 scale-110' 
                      : 'border-gray-300 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  {moodEmojis[value - 1]}
                </button>
              ))}
            </div>
          </div>

          {/* Emotions */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">What emotions are you experiencing?</h3>
            <div className="flex flex-wrap gap-2">
              {emotionOptions.map((emotion) => (
                <Button
                  key={emotion.name}
                  onClick={() => toggleEmotion(emotion.name)}
                  variant={selectedEmotions.includes(emotion.name) ? "default" : "outline"}
                  size="sm"
                  className={`${
                    selectedEmotions.includes(emotion.name) 
                      ? `${emotion.color} border-0`
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-1">{emotion.emoji}</span>
                  {emotion.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Contributing Factors */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">What's influencing your mood?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {moodFactors.map((factor) => (
                <Button
                  key={factor}
                  onClick={() => toggleFactor(factor)}
                  variant={selectedFactors.includes(factor) ? "default" : "outline"}
                  size="sm"
                  className={`text-xs ${
                    selectedFactors.includes(factor) 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {factor}
                </Button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Additional thoughts (optional)</h3>
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What's on your mind? Any specific events or thoughts you'd like to remember..."
              className="min-h-[100px] bg-white/80 border-purple-200 focus:border-purple-400"
            />
          </div>

          <Button 
            onClick={saveMoodEntry}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            Save Mood Entry
          </Button>
        </div>
      </Card>

      {/* Mood Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Mood Chart */}
        <Card className="p-6 bg-white/50 backdrop-blur-sm border-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Weekly Mood Trend</h2>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs text-gray-500"
                  />
                  <YAxis hide domain={[1, 5]} />
                  <Line 
                    type="monotone" 
                    dataKey="mood" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: "#7c3aed" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center">
              <Badge className="bg-purple-100 text-purple-800 border-0 px-3 py-1">
                Average: 3.8/5 This Week
              </Badge>
            </div>
          </div>
        </Card>

        {/* Mood Distribution */}
        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">Mood Distribution</h2>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { mood: "Great", count: 2, value: 5 },
                  { mood: "Good", count: 3, value: 4 },
                  { mood: "Okay", count: 1, value: 3 },
                  { mood: "Low", count: 1, value: 2 },
                  { mood: "Very Low", count: 0, value: 1 },
                ]}>
                  <XAxis 
                    dataKey="mood" 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs text-gray-500"
                  />
                  <YAxis hide />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {[2, 3, 1, 1, 0].map((_, index) => (
                      <Cell key={`cell-${index}`} fill={getMoodColor(5 - index)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-sm text-gray-600 text-center">
              Most common mood: <span className="font-semibold text-green-600">Good</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Entries */}
      <Card className="p-6 bg-white/50 backdrop-blur-sm border-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">Recent Entries</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { date: "Today", mood: 4, emotions: ["Happy", "Excited"], note: "Great day at work, finished my project!" },
              { date: "Yesterday", mood: 3, emotions: ["Calm", "Tired"], note: "Relaxing evening, early bedtime." },
              { date: "2 days ago", mood: 5, emotions: ["Grateful", "Happy"], note: "Spent time with family, feeling blessed." },
            ].map((entry, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-600">{entry.date}</span>
                      <span className="text-xl">{moodEmojis[entry.mood - 1]}</span>
                      <span className={`text-sm font-medium ${moodColors[entry.mood - 1]}`}>
                        {moodLabels[entry.mood - 1]}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {entry.emotions.map((emotion) => (
                        <Badge key={emotion} className="bg-purple-100 text-purple-800 border-0 text-xs">
                          {emotion}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{entry.note}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}