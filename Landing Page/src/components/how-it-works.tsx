import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, UserCheck, TrendingUp, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserCheck,
      title: "Sign Up Safely",
      description: "Create your anonymous profile in seconds. No personal information required - just choose a username and you're ready to start.",
      gradient: "from-[#7c3aed] to-[#a855f7]"
    },
    {
      step: "02", 
      icon: MessageCircle,
      title: "Start Chatting",
      description: "Begin a conversation with SIA about anything on your mind. Share your thoughts, concerns, or just check in about your day.",
      gradient: "from-[#3b82f6] to-[#7c3aed]"
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Get Personalized Support",
      description: "Receive tailored responses, coping strategies, and resources based on your specific situation and mental health needs.",
      gradient: "from-[#ec4899] to-[#f97316]"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Track Your Progress",
      description: "Monitor your mental wellness journey with mood tracking, goal setting, and personalized insights over time.",
      gradient: "from-[#10b981] to-[#3b82f6]"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            How <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">SIA</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting mental health support has never been easier. Follow these simple steps to start your wellness journey with SIA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-6 group">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-gray-400">{step.step}</span>
                      <h3 className="text-xl text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MTc0OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI chatbot interface"
                className="w-full h-auto"
              />
              
              {/* Chat overlay simulation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">SIA</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Hi! I'm here to support you. How are you feeling today?
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}