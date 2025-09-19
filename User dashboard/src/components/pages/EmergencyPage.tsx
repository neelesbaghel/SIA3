import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Heart,
  Shield,
  AlertTriangle,
  ExternalLink,
  Globe,
  Users
} from "lucide-react";

const emergencyContacts = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "Free and confidential emotional support 24/7",
    type: "Crisis",
    available: "24/7",
    methods: ["Call", "Chat", "Text"]
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "Free, 24/7 crisis support via text message",
    type: "Crisis",
    available: "24/7", 
    methods: ["Text"]
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    description: "Treatment referral and information service",
    type: "Information",
    available: "24/7",
    methods: ["Call"]
  },
  {
    name: "National Alliance on Mental Illness",
    number: "1-800-950-6264",
    description: "Support, education and advocacy",
    type: "Support",
    available: "Mon-Fri 10am-10pm ET",
    methods: ["Call", "Text"]
  }
];

const quickActions = [
  {
    title: "Immediate Crisis",
    description: "If you're in immediate danger",
    action: "Call 911",
    color: "bg-red-500",
    icon: AlertTriangle
  },
  {
    title: "Suicide Prevention",
    description: "24/7 crisis support",
    action: "Call 988",
    color: "bg-orange-500",
    icon: Phone
  },
  {
    title: "Crisis Chat",
    description: "Text-based crisis support",
    action: "Text HOME to 741741",
    color: "bg-blue-500",
    icon: MessageCircle
  },
  {
    title: "Local Emergency",
    description: "Find nearby help",
    action: "Find Resources",
    color: "bg-purple-500",
    icon: MapPin
  }
];

const copingStrategies = [
  {
    title: "Grounding Technique (5-4-3-2-1)",
    steps: [
      "5 things you can see",
      "4 things you can touch", 
      "3 things you can hear",
      "2 things you can smell",
      "1 thing you can taste"
    ]
  },
  {
    title: "Box Breathing",
    steps: [
      "Breathe in for 4 counts",
      "Hold for 4 counts",
      "Breathe out for 4 counts", 
      "Hold for 4 counts",
      "Repeat 4-8 times"
    ]
  },
  {
    title: "Progressive Muscle Relaxation",
    steps: [
      "Start with your toes",
      "Tense each muscle group for 5 seconds",
      "Release and relax for 10 seconds",
      "Move up through your body",
      "Notice the difference between tension and relaxation"
    ]
  }
];

const safetyPlan = [
  "Recognize warning signs",
  "Use coping strategies", 
  "Contact social supports",
  "Contact family members",
  "Contact mental health professionals",
  "Remove means of self-harm",
  "Go to emergency room or call 911"
];

export function EmergencyPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Emergency Support
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Immediate help and crisis resources
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Card 
            key={index}
            className="p-4 bg-white/50 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="space-y-3">
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
              <Button className={`w-full ${action.color} hover:opacity-90 text-white`}>
                {action.action}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Crisis Alert */}
      <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-red-900">If You're in Crisis</h2>
            <p className="text-red-800">
              If you're having thoughts of self-harm or suicide, please reach out for help immediately. 
              You are not alone, and there are people who want to help you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call 988 (Suicide Prevention)
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                Text HOME to 741741
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <Card className="p-6 bg-white/50 backdrop-blur-sm border-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Emergency Contacts</h2>
          </div>
          
          <div className="grid gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <Badge className={`text-xs ${
                        contact.type === 'Crisis' ? 'bg-red-100 text-red-800' :
                        contact.type === 'Information' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {contact.type}
                      </Badge>
                    </div>
                    
                    <p className="text-lg font-mono text-blue-600">{contact.number}</p>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{contact.available}</span>
                      </div>
                      <div className="flex gap-1">
                        {contact.methods.map((method, i) => (
                          <Badge key={i} className="bg-gray-100 text-gray-700 text-xs">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Coping Strategies & Safety Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Coping Strategies */}
        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">Immediate Coping Strategies</h2>
            </div>
            
            <div className="space-y-4">
              {copingStrategies.map((strategy, index) => (
                <div key={index} className="p-4 bg-white/60 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                  <ol className="space-y-1 text-sm text-gray-700">
                    {strategy.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-semibold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Safety Plan */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Safety Plan Steps</h2>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Follow these steps in order when you're feeling overwhelmed or in crisis:
            </p>
            
            <div className="space-y-3">
              {safetyPlan.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                <strong>Remember:</strong> You can stop at any step if you feel safe and the crisis has passed.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Resources */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Additional Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/60 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Support Groups</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Connect with others who understand your experience.
              </p>
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                Find Groups Near Me
              </Button>
            </div>
            
            <div className="p-4 bg-white/60 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Mental Health Services</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Find professional mental health services in your area.
              </p>
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                Find Services
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Important Notice */}
      <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
        <div className="text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto" />
          <h3 className="font-bold text-yellow-900">Important Notice</h3>
          <p className="text-sm text-yellow-800">
            This app is not a replacement for professional mental health treatment. 
            If you're experiencing a mental health emergency, please contact emergency services 
            or a mental health professional immediately.
          </p>
        </div>
      </Card>
    </div>
  );
}