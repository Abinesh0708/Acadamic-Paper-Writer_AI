import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import Label from '../ui/Label';
import Textarea from '../ui/Textarea';
import PhaseCard from './common/PhaseCard';
import Button from '../ui/Button';
import { Bot, LoaderCircle } from 'lucide-react';

const Phase4_Conclusion: React.FC = () => {
  const { conclusion, setConclusion, generatePaper, isLoading } = usePaperStore();

  return (
    <PhaseCard
      title="Phase 4: Conclusion"
      description="Summarize your findings and suggest directions for future research."
      showNext={false}
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="conclusion">Conclusion & Future Scope</Label>
          <Textarea
            id="conclusion"
            placeholder="Summarize the main findings of your study and discuss their implications. Suggest potential avenues for future research..."
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={generatePaper} disabled={isLoading} className="min-w-[150px]">
            {isLoading ? (
              <>
                <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Bot className="w-4 h-4 mr-2" />
                Generate Paper
              </>
            )}
          </Button>
        </div>
      </div>
    </PhaseCard>
  );
};

export default Phase4_Conclusion;
