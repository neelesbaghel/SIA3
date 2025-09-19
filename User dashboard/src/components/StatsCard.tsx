import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  gradient: string;
  status?: string;
  statusColor?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  gradient, 
  status,
  statusColor = "bg-emerald-500"
}: StatsCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className={`absolute inset-0 ${gradient} opacity-10`} />
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${gradient} bg-opacity-20`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {status && (
            <Badge className={`${statusColor} text-white border-0 px-3 py-1`}>
              {status}
            </Badge>
          )}
        </div>
        
        <div className="space-y-1">
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-gray-500 text-sm">{subtitle}</p>
          )}
        </div>
      </div>
    </Card>
  );
}