import { useState, useEffect, useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Wind, 
  Play, 
  Pause, 
  RotateCcw, 
  Timer,
  Sparkles,
  Heart
} from "lucide-react";

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'rest';

interface BreathingPattern {
  name: string;
  description: string;
  inhale: number;
  hold: number;
  exhale: number;
  rest: number;
  color: string;
  gradient: string;
}

const breathingPatterns: BreathingPattern[] = [
  {
    name: "4-7-8 Technique",
    description: "Great for anxiety and sleep",
    inhale: 4,
    hold: 7,
    exhale: 8,
    rest: 2,
    color: "blue",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    name: "Box Breathing",
    description: "Used by Navy SEALs for focus",
    inhale: 4,
    hold: 4,
    exhale: 4,
    rest: 4,
    color: "purple",
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    name: "Calm Breathing",
    description: "Simple and relaxing",
    inhale: 4,
    hold: 2,
    exhale: 6,
    rest: 2,
    color: "emerald",
    gradient: "from-emerald-400 to-green-500"
  },
  {
    name: "Energizing Breath",
    description: "Boost your energy naturally",
    inhale: 6,
    hold: 3,
    exhale: 4,
    rest: 1,
    color: "orange",
    gradient: "from-orange-400 to-red-500"
  }
];

export function BreathingPage() {
  const [selectedPattern, setSelectedPattern] = useState(breathingPatterns[0]);
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<BreathingPhase>('inhale');
  const [timeLeft, setTimeLeft] = useState(selectedPattern.inhale);
  const [cycle, setCycle] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const phaseInstructions = {
    inhale: "Breathe In",
    hold: "Hold",
    exhale: "Breathe Out",
    rest: "Rest"
  };

  const phaseColors = {
    inhale: "text-blue-600",
    hold: "text-purple-600", 
    exhale: "text-emerald-600",
    rest: "text-gray-600"
  };

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        setTotalTime(prev => prev + 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      // Move to next phase
      switch (currentPhase) {
        case 'inhale':
          setCurrentPhase('hold');
          setTimeLeft(selectedPattern.hold);
          break;
        case 'hold':
          setCurrentPhase('exhale');
          setTimeLeft(selectedPattern.exhale);
          break;
        case 'exhale':
          setCurrentPhase('rest');
          setTimeLeft(selectedPattern.rest);
          break;
        case 'rest':
          setCurrentPhase('inhale');
          setTimeLeft(selectedPattern.inhale);
          setCycle(prev => prev + 1);
          break;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [isActive, timeLeft, currentPhase, selectedPattern]);

  const startStop = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setCurrentPhase('inhale');
    setTimeLeft(selectedPattern.inhale);
    setCycle(0);
    setTotalTime(0);
  };

  const selectPattern = (pattern: BreathingPattern) => {
    setSelectedPattern(pattern);
    setIsActive(false);
    setCurrentPhase('inhale');
    setTimeLeft(pattern.inhale);
    setCycle(0);
    setTotalTime(0);
  };

  const getCircleScale = () => {
    const progress = 1 - (timeLeft / getCurrentPhaseDuration());
    switch (currentPhase) {
      case 'inhale':
        return 0.5 + (progress * 0.5); // Scale from 0.5 to 1
      case 'exhale':
        return 1 - (progress * 0.5); // Scale from 1 to 0.5
      default:
        return currentPhase === 'hold' ? 1 : 0.5;
    }
  };

  const getCurrentPhaseDuration = () => {
    switch (currentPhase) {
      case 'inhale': return selectedPattern.inhale;
      case 'hold': return selectedPattern.hold;
      case 'exhale': return selectedPattern.exhale;
      case 'rest': return selectedPattern.rest;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
          <Wind className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Breathing Exercises
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Guided breathing for relaxation and focus
          </p>
        </div>
      </div>

      {/* Breathing Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {breathingPatterns.map((pattern) => (
          <Card 
            key={pattern.name}
            className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
              selectedPattern.name === pattern.name 
                ? `border-${pattern.color}-400 bg-${pattern.color}-50` 
                : 'border-transparent bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => selectPattern(pattern)}
          >
            <div className="space-y-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${pattern.gradient} rounded-xl flex items-center justify-center`}>
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{pattern.name}</h3>
                <p className="text-sm text-gray-600">{pattern.description}</p>
              </div>
              <div className="text-xs text-gray-500">
                {pattern.inhale}-{pattern.hold}-{pattern.exhale}-{pattern.rest}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Breathing Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Breathing Circle */}
        <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-0">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-80 h-80 rounded-full border-4 border-gray-200 flex items-center justify-center">
                {/* Breathing Circle */}
                <div 
                  className={`w-60 h-60 rounded-full bg-gradient-to-r ${selectedPattern.gradient} transition-transform duration-1000 ease-in-out flex items-center justify-center shadow-2xl`}
                  style={{ 
                    transform: `scale(${getCircleScale()})`,
                    opacity: isActive ? 0.8 : 0.6
                  }}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">{timeLeft}</div>
                    <div className={`text-lg ${phaseColors[currentPhase]} mix-blend-overlay`}>
                      {phaseInstructions[currentPhase]}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2">
                  {['inhale', 'hold', 'exhale', 'rest'].map((phase, index) => (
                    <div 
                      key={phase}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        phase === currentPhase ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <Button
                onClick={startStop}
                size="lg"
                className={`bg-gradient-to-r ${selectedPattern.gradient} hover:opacity-90 text-white`}
              >
                {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isActive ? 'Pause' : 'Start'}
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                size="lg"
                className="border-gray-300"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </Button>
            </div>
          </div>
        </Card>

        {/* Stats & Instructions */}
        <div className="space-y-6">
          {/* Session Stats */}
          <Card className="p-6 bg-white/50 backdrop-blur-sm border-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Timer className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Session Stats</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cycles Completed</span>
                  <Badge className="bg-purple-100 text-purple-800 border-0">{cycle}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Time</span>
                  <Badge className="bg-blue-100 text-blue-800 border-0">
                    {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Phase</span>
                  <Badge className={`border-0 ${
                    currentPhase === 'inhale' ? 'bg-blue-100 text-blue-800' :
                    currentPhase === 'hold' ? 'bg-purple-100 text-purple-800' :
                    currentPhase === 'exhale' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {phaseInstructions[currentPhase]}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Instructions */}
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">How to Use</h3>
              </div>
              
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Find a comfortable position</p>
                <p>• Follow the visual cue and timer</p>
                <p>• Breathe naturally, don't force it</p>
                <p>• Focus on the present moment</p>
              </div>
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Benefits</h3>
              </div>
              
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Reduces stress and anxiety</p>
                <p>• Improves focus and clarity</p>
                <p>• Lowers blood pressure</p>
                <p>• Enhances sleep quality</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}