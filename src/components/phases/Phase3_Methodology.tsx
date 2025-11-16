import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import Label from '../ui/Label';
import Textarea from '../ui/Textarea';
import PhaseCard from './common/PhaseCard';

const Phase3_Methodology: React.FC = () => {
  const { methodology, setMethodology } = usePaperStore();

  return (
    <PhaseCard
      title="Phase 3: Methodology"
      description="Detail the methods, tools, and datasets used in your research."
    >
      <div className="grid gap-2">
        <Label htmlFor="methodology">Methodology</Label>
        <Textarea
          id="methodology"
          placeholder="Describe the steps you took to conduct your research, including data collection, analysis techniques, and tools used..."
          value={methodology}
          onChange={(e) => setMethodology(e.target.value)}
        />
      </div>
    </PhaseCard>
  );
};

export default Phase3_Methodology;
