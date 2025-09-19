import { Card } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

const stressData = [
  { day: "Mon", current: 6, average: 5.2 },
  { day: "Tue", current: 4, average: 5.2 },
  { day: "Wed", current: 7, average: 5.2 },
  { day: "Thu", current: 5, average: 5.2 },
  { day: "Fri", current: 6, average: 5.2 },
  { day: "Sat", current: 3, average: 5.2 },
  { day: "Sun", current: 4, average: 5.2 },
];

const activitiesData = [
  { activity: "Breathing", completed: 2, total: 3 },
  { activity: "Games", completed: 1, total: 2 },
  { activity: "Meditation", completed: 3, total: 4 },
  { activity: "Journal", completed: 1, total: 1 },
];

export function ProgressChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Stress Management Chart */}
      <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Stress Management</h3>
            <p className="text-sm text-gray-600">Current vs. Average</p>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stressData}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  className="text-xs text-gray-500"
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="url(#gradient1)" 
                  strokeWidth={3}
                  dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#ea580c" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="average" 
                  stroke="#d1d5db" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
              +0.8 Better than average
            </div>
          </div>
          
          <p className="text-sm text-gray-600">
            Lower is better • Weekly average: 5.2/10
          </p>
        </div>
      </Card>

      {/* Wellness Activities */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-0">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Wellness Activities</h3>
            <p className="text-sm text-gray-600">This week's progress</p>
          </div>
          
          <div className="space-y-4">
            {activitiesData.map((item, index) => (
              <div key={item.activity} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{item.activity}</span>
                  <span className="text-sm text-gray-500">{item.completed}/{item.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? "bg-gradient-to-r from-emerald-400 to-emerald-500" :
                      index === 1 ? "bg-gradient-to-r from-purple-400 to-purple-500" :
                      index === 2 ? "bg-gradient-to-r from-blue-400 to-blue-500" :
                      "bg-gradient-to-r from-pink-400 to-pink-500"
                    }`}
                    style={{ width: `${(item.completed / item.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}