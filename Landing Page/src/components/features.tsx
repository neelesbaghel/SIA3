import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, Brain, Clock, Users, Shield, Lightbulb } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Conversations",
      description: "Engage in natural, supportive conversations with our advanced AI that understands student mental health needs.",
      gradient: "from-[#7c3aed] to-[#a855f7]"
    },
    {
      icon: Brain,
      title: "Personalized Support",
      description: "Receive tailored mental health guidance based on your unique situation, stress levels, and academic challenges.",
      gradient: "from-[#3b82f6] to-[#7c3aed]"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access mental health support anytime you need it, whether it's late-night study stress or morning anxiety.",
      gradient: "from-[#ec4899] to-[#f97316]"
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your conversations are completely confidential and secure. We prioritize your privacy and mental health safety.",
      gradient: "from-[#10b981] to-[#3b82f6]"
    },
    {
      icon: Users,
      title: "Peer Connection",
      description: "Connect with anonymous peer support and learn from others' experiences in a safe, moderated environment.",
      gradient: "from-[#f59e0b] to-[#ec4899]"
    },
    {
      icon: Lightbulb,
      title: "Coping Strategies",
      description: "Learn evidence-based coping techniques, mindfulness exercises, and stress management tools for academic life.",
      gradient: "from-[#8b5cf6] to-[#ec4899]"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">SIA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SIA combines cutting-edge AI technology with evidence-based mental health practices to provide students with accessible, personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}