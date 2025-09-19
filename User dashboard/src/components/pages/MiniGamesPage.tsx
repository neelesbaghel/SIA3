import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Gamepad2, 
  Play, 
  Trophy, 
  Timer,
  Zap,
  Brain,
  Target,
  Sparkles,
  Star
} from "lucide-react";

interface Game {
  id: string;
  name: string;
  description: string;
  icon: any;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  category: 'Focus' | 'Memory' | 'Relaxation' | 'Mindfulness';
  gradient: string;
  benefits: string[];
}

const games: Game[] = [
  {
    id: '1',
    name: 'Color Meditation',
    description: 'Focus on breathing while visualizing calming colors',
    icon: Sparkles,
    difficulty: 'Easy',
    duration: '5 min',
    category: 'Relaxation',
    gradient: 'from-blue-400 to-cyan-500',
    benefits: ['Reduces stress', 'Improves focus', 'Calms mind']
  },
  {
    id: '2',
    name: 'Memory Palace',
    description: 'Build and navigate through your mental memory palace',
    icon: Brain,
    difficulty: 'Medium',
    duration: '10 min',
    category: 'Memory',
    gradient: 'from-purple-400 to-indigo-500',
    benefits: ['Enhances memory', 'Improves concentration', 'Mental exercise']
  },
  {
    id: '3',
    name: 'Mindful Clicking',
    description: 'Click targets mindfully, focusing on the present moment',
    icon: Target,
    difficulty: 'Easy',
    duration: '3 min',
    category: 'Mindfulness',
    gradient: 'from-emerald-400 to-green-500',
    benefits: ['Present moment awareness', 'Hand-eye coordination', 'Stress relief']
  },
  {
    id: '4',
    name: 'Focus Flow',
    description: 'Maintain concentration while following moving patterns',
    icon: Zap,
    difficulty: 'Hard',
    duration: '15 min',
    category: 'Focus',
    gradient: 'from-orange-400 to-red-500',
    benefits: ['Deep focus', 'Mental stamina', 'Attention control']
  },
  {
    id: '5',
    name: 'Breathing Rhythm',
    description: 'Match your breathing to visual and audio cues',
    icon: Sparkles,
    difficulty: 'Easy',
    duration: '7 min',
    category: 'Relaxation',
    gradient: 'from-pink-400 to-purple-500',
    benefits: ['Anxiety relief', 'Better breathing', 'Relaxation']
  },
  {
    id: '6',
    name: 'Pattern Memory',
    description: 'Remember and recreate increasingly complex patterns',
    icon: Brain,
    difficulty: 'Medium',
    duration: '8 min',
    category: 'Memory',
    gradient: 'from-cyan-400 to-blue-500',
    benefits: ['Working memory', 'Pattern recognition', 'Mental agility']
  }
];

const achievements = [
  { name: 'First Game', description: 'Completed your first mindful game', icon: Play, unlocked: true },
  { name: 'Focused Mind', description: 'Completed 5 focus games', icon: Brain, unlocked: true },
  { name: 'Memory Master', description: 'Achieved perfect score in memory game', icon: Trophy, unlocked: false },
  { name: 'Zen Mode', description: 'Completed 10 relaxation sessions', icon: Sparkles, unlocked: true },
  { name: 'Daily Player', description: 'Played games 7 days in a row', icon: Star, unlocked: false },
];

export function MiniGamesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [playingGame, setPlayingGame] = useState<string | null>(null);

  const categories = ['All', 'Focus', 'Memory', 'Relaxation', 'Mindfulness'];

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Focus': return 'bg-orange-100 text-orange-800';
      case 'Memory': return 'bg-purple-100 text-purple-800';
      case 'Relaxation': return 'bg-blue-100 text-blue-800';
      case 'Mindfulness': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const playGame = (gameId: string) => {
    setPlayingGame(gameId);
    // Here you would launch the actual game
    setTimeout(() => {
      setPlayingGame(null);
      // Show completion message or results
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
          <Gamepad2 className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Mini Games
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Mindful games for mental wellness and focus
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 border-0">
          <div className="flex items-center gap-3">
            <Play className="w-6 h-6 text-emerald-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Games Played</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
          <div className="flex items-center gap-3">
            <Timer className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">2h 15m</div>
              <div className="text-sm text-gray-600">Time Played</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-0">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Achievements</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-red-50 border-0">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            className={selectedCategory === category 
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              : "text-gray-700 hover:bg-gray-50"
            }
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Card 
            key={game.id} 
            className="p-6 bg-white/50 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="space-y-4">
              {/* Game Header */}
              <div className="flex items-start justify-between">
                <div className={`p-3 bg-gradient-to-r ${game.gradient} rounded-xl`}>
                  <game.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(game.difficulty)}>
                    {game.difficulty}
                  </Badge>
                  <Badge className={getCategoryColor(game.category)}>
                    {game.category}
                  </Badge>
                </div>
              </div>

              {/* Game Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">{game.name}</h3>
                <p className="text-sm text-gray-600">{game.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Timer className="w-4 h-4" />
                  <span>{game.duration}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700">Benefits:</h4>
                <div className="flex flex-wrap gap-1">
                  {game.benefits.map((benefit, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Play Button */}
              <Button
                onClick={() => playGame(game.id)}
                disabled={playingGame === game.id}
                className={`w-full bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white`}
              >
                {playingGame === game.id ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Playing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Play Game
                  </div>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.unlocked 
                    ? 'bg-yellow-100 border-yellow-300' 
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    achievement.unlocked 
                      ? 'bg-yellow-200 text-yellow-800' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${
                      achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Daily Challenge */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">Daily Challenge</h2>
            <Badge className="bg-indigo-100 text-indigo-800 border-0">New</Badge>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">Focus Master Challenge</h3>
              <p className="text-sm text-gray-600">Complete 3 focus games without breaks</p>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-700">Reward: 50 focus points</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              Start Challenge
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}