import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import Label from '../ui/Label';
import Textarea from '../ui/Textarea';
import PhaseCard from './common/PhaseCard';

const Phase1_LiteratureReview: React.FC = () => {
  const { literatureReview, setLiteratureReview, novelty, setNovelty } = usePaperStore();

  return (
    <PhaseCard
      title="Phase 1: Literature Review & Novelty"
      description="Provide a summary of existing research and identify the gap your work aims to fill."
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="literature-review">Literature Review</Label>
          <Textarea
            id="literature-review"
            placeholder="Summarize key findings, methodologies, and debates from previous studies..."
            value={literatureReview}
            onChange={(e) => setLiteratureReview(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="novelty">Gap & Novelty</Label>
          <Textarea
            id="novelty"
            placeholder="Clearly state the research gap and the unique contribution of your study..."
            value={novelty}
            onChange={(e) => setNovelty(e.target.value)}
          />
        </div>
      </div>
    </PhaseCard>
  );
};

export default Phase1_LiteratureReview;
