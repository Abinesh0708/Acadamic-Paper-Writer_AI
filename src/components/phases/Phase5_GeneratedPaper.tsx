import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import PhaseCard from './common/PhaseCard';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent } from '../ui/Card';

const Phase5_GeneratedPaper: React.FC = () => {
  const { generatedPaper } = usePaperStore();

  return (
    <PhaseCard
      title="Phase 5: Generated Paper"
      description="Review the AI-generated draft of your academic paper."
    >
      <Card className="bg-muted/20 border-dashed">
        <CardContent className="p-6">
          <article className="prose prose-invert prose-serif max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {generatedPaper}
            </ReactMarkdown>
          </article>
        </CardContent>
      </Card>
    </PhaseCard>
  );
};

export default Phase5_GeneratedPaper;
