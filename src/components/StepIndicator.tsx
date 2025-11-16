import React from 'react';
import { CheckCircle2, LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface StepIndicatorProps {
  stepNumber: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  Icon: LucideIcon;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  stepNumber,
  title,
  isActive,
  isCompleted,
  onClick,
  Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center w-full p-3 text-left rounded-md transition-colors duration-200",
        isActive 
          ? "bg-accent text-accent-foreground" 
          : "hover:bg-muted/50",
        isCompleted
          ? "text-muted-foreground"
          : "text-foreground"
      )}
    >
      <div className="flex items-center justify-center w-6 h-6 mr-4">
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : (
          <Icon className={cn("w-5 h-5", isActive ? "text-accent-foreground" : "text-accent")} />
        )}
      </div>
      <span className={cn("font-medium", isActive && "font-semibold")}>{title}</span>
    </button>
  );
};

export default StepIndicator;
