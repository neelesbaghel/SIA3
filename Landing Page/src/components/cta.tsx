import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#ec4899]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-lg">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Start Your Mental Wellness Journey?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of students who have found support, guidance, and peace of mind with SIA. 
              Your mental health matters, and help is just a conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-white text-[#7c3aed] hover:bg-gray-100 px-8 py-4 text-lg group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Free Chat
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#7c3aed] px-8 py-4 text-lg"
              >
                Learn More About SIA
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>100% Free to Use</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>No Registration Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Completely Anonymous</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Available 24/7</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}