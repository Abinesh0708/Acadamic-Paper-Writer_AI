import React from 'react';
import usePaperStore from '../../store/usePaperStore';
import PhaseCard from './common/PhaseCard';
import { Sparkles, Type, Pilcrow } from 'lucide-react';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import toast from 'react-hot-toast';

const synonymMap: { [key: string]: string[] } = {
  "impact": ["effect", "influence", "consequence"],
  "explore": ["investigate", "examine", "analyze"],
  "important": ["significant", "crucial", "vital"],
  "process": ["procedure", "method", "operation"],
};

const Phase7_Editor: React.FC = () => {
  const { editedPaper, setEditedPaper } = usePaperStore();

  const suggestSynonyms = () => {
    const words = editedPaper.toLowerCase().match(/\b(\w+)\b/g) || [];
    const foundSynonyms: string[] = [];
    
    for (const word of words) {
      if (synonymMap[word] && !foundSynonyms.length) {
        foundSynonyms.push(...synonymMap[word]);
        toast.success(
          <span>
            Synonyms for <b>{word}</b>: {foundSynonyms.join(', ')}
          </span>,
          { duration: 5000 }
        );
        return;
      }
    }
    toast.error("No common synonyms found to suggest.");
  };

  return (
    <PhaseCard
      title="Phase 7: Manual Editing Tools"
      description="Fine-tune your paper with advanced editing tools."
      showNext={false}
    >
      <div className="flex items-center gap-2 p-2 mb-4 border rounded-lg bg-muted/30 border-border">
        <Button variant="ghost" size="sm" onClick={suggestSynonyms}>
          <Sparkles className="w-4 h-4 mr-2" />
          Suggest Synonyms
        </Button>
        <Button variant="ghost" size="sm" disabled>
          <Type className="w-4 h-4 mr-2" />
          Improve Sentence (Soon)
        </Button>
        <Button variant="ghost" size="sm" disabled>
          <Pilcrow className="w-4 h-4 mr-2" />
          Fix Grammar (Soon)
        </Button>
      </div>

      <Textarea
        placeholder="Your final paper will appear here for editing..."
        value={editedPaper}
        onChange={(e) => setEditedPaper(e.target.value)}
        className="h-[60vh] text-base"
      />
    </PhaseCard>
  );
};

export default Phase7_Editor;
