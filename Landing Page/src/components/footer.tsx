import { MessageCircle, Heart, Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
              SIA
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted AI companion for mental health support, designed specifically for students navigating academic and personal challenges.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="h-4 w-4 text-[#7c3aed]" />
                <span className="text-sm">Secure & Private</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#crisis" className="text-gray-400 hover:text-white transition-colors">
                  Crisis Resources
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-gray-400 hover:text-white transition-colors">
                  Send Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-[#7c3aed]" />
                <span className="text-sm">support@sia-mental.health</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-[#ec4899]" />
                <span className="text-sm">24/7 Crisis Hotline</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="h-4 w-4 text-[#3b82f6]" />
                <span className="text-sm">Chat with SIA anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 SIA (Student Interactive Assistant). All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for student mental health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}