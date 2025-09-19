import { Card } from "./ui/card";
import { Lightbulb } from "lucide-react";

export function DailyTip() {
  return (
    <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-0 hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-4">
        <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Daily Tip</h3>
          <p className="text-gray-700 leading-relaxed">
            Take three deep breaths whenever you feel overwhelmed. This simple 
            practice can help reset your nervous system and bring you back to 
            the present moment. 🌟
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Mindfulness practice</span>
          </div>
        </div>
      </div>
    </Card>
  );
}