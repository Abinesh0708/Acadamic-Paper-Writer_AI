import React from 'react';
import usePaperStore from '../store/usePaperStore';
import StepIndicator from './StepIndicator';
import { FileText, Microscope, TestTube2, BookCheck, Bot, Wand, Edit } from 'lucide-react';

const steps = [
  { id: 1, name: 'Literature Review', icon: FileText },
  { id: 2, name: 'Abstract', icon: BookCheck },
  { id: 3, name: 'Methodology', icon: Microscope },
  { id: 4, name: 'Conclusion', icon: TestTube2 },
  { id: 5, name: 'Generate Paper', icon: Bot },
  { id: 6, name: 'Humanize', icon: Wand },
  { id: 7, name: 'Manual Editing', icon: Edit },
];

const Sidebar: React.FC = () => {
  const { currentStep, setCurrentStep } = usePaperStore();

  return (
    <aside className="w-64 p-6 border-r border-border bg-card/20 hidden md:block">
      <nav className="flex flex-col gap-2">
        {steps.map((step) => (
          <StepIndicator
            key={step.id}
            stepNumber={step.id}
            title={step.name}
            isActive={currentStep === step.id}
            isCompleted={currentStep > step.id}
            onClick={() => setCurrentStep(step.id)}
            Icon={step.icon}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
