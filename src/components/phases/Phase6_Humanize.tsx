import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import PhaseCard from './common/PhaseCard';
import { Wand, LoaderCircle } from 'lucide-react';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import Label from '../ui/Label';

const Phase6_Humanize: React.FC = () => {
  const { 
    generatedPaper, 
    humanizedPaper, 
    humanizePaper, 
    isHumanizing,
    acceptHumanizedPaper
  } = usePaperStore();

  return (
    <PhaseCard
      title="Phase 6: Humanize (T5 Simulation)"
      description="Refine the generated content to have a more natural, human-like tone."
      onNext={acceptHumanizedPaper}
    >
      <div className="flex justify-center mb-6">
        <Button onClick={humanizePaper} disabled={isHumanizing || !generatedPaper}>
          {isHumanizing ? (
            <>
              <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
              Humanizing...
            </>
          ) : (
            <>
              <Wand className="w-4 h-4 mr-2" />
              Humanize Content
            </>
          )}
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="original-paper">Original AI-Generated Text</Label>
          <Textarea
            id="original-paper"
            readOnly
            value={generatedPaper || "Generate a paper in Phase 4 first."}
            className="h-96 resize-none bg-muted/20"
          />
        </div>
        <div>
          <Label htmlFor="humanized-paper">Humanized Version</Label>
          <Textarea
            id="humanized-paper"
            readOnly
            value={isHumanizing ? "Processing..." : humanizedPaper || "Click 'Humanize Content' to see the result."}
            className="h-96 resize-none bg-muted/20"
          />
        </div>
      </div>
    </PhaseCard>
  );
};

export default Phase6_Humanize;
