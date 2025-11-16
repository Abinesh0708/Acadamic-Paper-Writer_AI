import { create } from 'zustand';
import { PaperStore } from '../types';
import toast from 'react-hot-toast';

const STEPS = 7;

// Simple word replacement map to simulate humanization
const humanizationMap: { [key: string]: string } = {
  "multifaceted": "varied",
  "delve into": "explore",
  "reshaping": "changing",
  "opening new frontiers for discovery": "creating new opportunities",
  "scholarly world": "academic community",
  "yielded significant improvements": "led to major improvements",
  "contextualizes these findings": "explains these findings",
  "broader academic landscape": "wider academic field",
  "ethical considerations that arise": "ethical issues",
  "longitudinal studies are required": "long-term studies are needed",
  "nuanced qualitative analysis": "detailed qualitative analysis",
};

const usePaperStore = create<PaperStore>((set, get) => ({
  currentStep: 1,
  literatureReview: '',
  novelty: '',
  abstract: '',
  methodology: '',
  conclusion: '',
  generatedPaper: '',
  humanizedPaper: '',
  editedPaper: '',
  isLoading: false,
  isHumanizing: false,
  
  setCurrentStep: (step) => {
    if (step === 7 && !get().editedPaper) {
      set({ editedPaper: get().humanizedPaper || get().generatedPaper });
    }
    set({ currentStep: step });
  },
  
  setLiteratureReview: (text) => set({ literatureReview: text }),
  setNovelty: (text) => set({ novelty: text }),
  setAbstract: (text) => set({ abstract: text }),
  setMethodology: (text) => set({ methodology: text }),
  setConclusion: (text) => set({ conclusion: text }),
  setEditedPaper: (text) => set({ editedPaper: text }),

  nextStep: () => set((state) => {
    const next = Math.min(state.currentStep + 1, STEPS);
    if (next === 7 && !get().editedPaper) {
      set({ editedPaper: get().humanizedPaper || get().generatedPaper });
    }
    return { currentStep: next };
  }),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

  generatePaper: async () => {
    const { literatureReview, novelty, abstract, methodology, conclusion } = get();

    if (!literatureReview || !novelty || !abstract || !methodology || !conclusion) {
      toast.error("Please fill all fields before generating the paper.");
      return;
    }

    set({ isLoading: true });
    toast.loading("Generating your academic paper...");

    await new Promise(resolve => setTimeout(resolve, 2000));

    const paperContent = `
# A Study on the Impact of AI in Academic Research

## Abstract
${abstract}

## 1. Introduction
This paper explores the multifaceted impact of Artificial Intelligence on modern academic research. We delve into how AI is reshaping methodologies, enhancing data analysis, and opening new frontiers for discovery. The introduction sets the stage by highlighting the growing importance of AI tools in the scholarly world.

## 2. Literature Review
${literatureReview}

## 3. Gap & Novelty
${novelty}

## 4. Methodology
${methodology}

## 5. Results and Discussion
The integration of AI into the research process yielded significant improvements in efficiency and accuracy. Our analysis indicates a 40% reduction in data processing time and a 25% increase in the identification of relevant patterns compared to traditional methods. The discussion section contextualizes these findings within the broader academic landscape, acknowledging both the opportunities and the ethical considerations that arise.

## 6. Conclusion
${conclusion}

## 7. Future Scope
Future work will focus on developing more sophisticated AI models for nuanced qualitative analysis and exploring the long-term implications of AI on research integrity and originality. Longitudinal studies are required to fully understand this technological shift.

## References
- Smith, J. (2023). *AI in Modern Science*. Academic Press.
- Doe, A. & Roe, B. (2024). "Machine Learning for Data Analysis." *Journal of Advanced Computing*, 45(2), 123-145.
`;

    toast.dismiss();
    toast.success("Paper generated successfully!");
    set({ generatedPaper: paperContent, isLoading: false, currentStep: 5 });
  },

  humanizePaper: async () => {
    set({ isHumanizing: true });
    toast.loading("Humanizing content...");

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let humanized = get().generatedPaper;
    Object.entries(humanizationMap).forEach(([key, value]) => {
      humanized = humanized.replace(new RegExp(key, 'gi'), value);
    });

    toast.dismiss();
    toast.success("Content humanized!");
    set({ humanizedPaper: humanized, isHumanizing: false });
  },

  acceptHumanizedPaper: () => {
    const { humanizedPaper, generatedPaper, nextStep } = get();
    set({ editedPaper: humanizedPaper || generatedPaper });
    nextStep();
  }
}));

export default usePaperStore;
