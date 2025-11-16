export type PaperState = {
    currentStep: number;
    literatureReview: string;
    novelty: string;
    abstract: string;
    methodology: string;
    conclusion: string;
    generatedPaper: string;
    humanizedPaper: string;
    editedPaper: string;
    isLoading: boolean;
    isHumanizing: boolean;
};

export type PaperActions = {
    setCurrentStep: (step: number) => void;
    setLiteratureReview: (text: string) => void;
    setNovelty: (text: string) => void;
    setAbstract: (text: string) => void;
    setMethodology: (text: string) => void;
    setConclusion: (text: string) => void;
    setEditedPaper: (text: string) => void;
    generatePaper: () => Promise<void>;
    humanizePaper: () => Promise<void>;
    acceptHumanizedPaper: () => void;
    nextStep: () => void;
    prevStep: () => void;
};

export type PaperStore = PaperState & PaperActions;
