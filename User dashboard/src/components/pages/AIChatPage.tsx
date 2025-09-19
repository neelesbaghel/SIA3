import { useState, useRef, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send, Bot, User, Heart, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm SIA, your mental health companion. How are you feeling today? 💙",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I understand how you're feeling. It's completely normal to experience these emotions. Would you like to try a breathing exercise?",
        "Thank you for sharing that with me. Your feelings are valid. What usually helps you feel better when you're going through this?",
        "It sounds like you're dealing with a lot right now. Remember, you're stronger than you think. How can I support you today?",
        "I'm here to listen. Sometimes just talking about what's on your mind can help. What's been the highlight of your day?",
        "That's a great insight! Self-awareness is an important step in managing our mental health. How would you like to work on this together?"
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI Chat
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Your personal mental health companion
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <Card className="h-[600px] flex flex-col bg-white/50 backdrop-blur-sm border-0">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                    : 'bg-gradient-to-r from-purple-400 to-indigo-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Heart className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`p-4 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                    : 'bg-white/80 text-gray-800 border border-purple-200'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className={`text-xs mt-2 block ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex gap-3">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-white/80 border-purple-200 focus:border-purple-400"
            />
            <Button
              onClick={sendMessage}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 border-0 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Feeling Anxious?</h3>
              <p className="text-sm text-gray-600">Let's try a breathing exercise</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-0 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Need Support?</h3>
              <p className="text-sm text-gray-600">I'm here to listen and help</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-0 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Daily Check-in</h3>
              <p className="text-sm text-gray-600">How was your day?</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}