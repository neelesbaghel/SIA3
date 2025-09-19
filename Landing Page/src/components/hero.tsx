import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, Heart, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6">
              Your Mental Health{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
                Companion
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              SIA is an AI-powered student interactive assistant designed to support your mental wellness journey through personalized conversations and guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] hover:from-[#6d28d9] hover:to-[#db2777] text-white px-8 py-3"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chatting
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white px-8 py-3"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="h-5 w-5 text-[#7c3aed]" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="h-5 w-5 text-[#ec4899]" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-5 w-5 text-[#3b82f6]" />
                <span>AI-Powered Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620147512372-9e00421556bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4MTk3MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students supporting mental health"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] rounded-full p-3 shadow-lg animate-pulse">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] rounded-full p-3 shadow-lg animate-pulse delay-1000">
              <Heart className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] rounded-full opacity-10 animate-bounce delay-500"></div>
      </div>
    </section>
  );
}