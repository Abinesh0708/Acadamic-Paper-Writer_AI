import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/Card';
import Button from '../../ui/Button';
import usePaperStore from '../../../store/usePaperStore';
import { ArrowLeft, ArrowRight, LoaderCircle } from 'lucide-react';

interface PhaseCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onNext?: () => void;
  showNext?: boolean;
  showPrev?: boolean;
  isGenerating?: boolean;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ title, description, children, onNext, showNext = true, showPrev = true, isGenerating = false }) => {
  const { nextStep, prevStep } = usePaperStore();

  const handleNext = onNext || nextStep;

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex justify-between">
        {showPrev ? (
          <Button variant="secondary" onClick={prevStep}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
        ) : <div />}
        {showNext && (
          <Button onClick={handleNext} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PhaseCard;
