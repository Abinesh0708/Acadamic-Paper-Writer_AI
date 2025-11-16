import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import Label from '../ui/Label';
import Textarea from '../ui/Textarea';
import PhaseCard from './common/PhaseCard';

const Phase2_Abstract: React.FC = () => {
  const { abstract, setAbstract } = usePaperStore();

  return (
    <PhaseCard
      title="Phase 2: Abstract"
      description="Write a concise summary of your research, including the problem, methods, results, and conclusion."
    >
      <div className="grid gap-2">
        <Label htmlFor="abstract">Abstract</Label>
        <Textarea
          id="abstract"
          placeholder="Provide a brief, comprehensive summary of your study..."
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
      </div>
    </PhaseCard>
  );
};

export default Phase2_Abstract;
