import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import usePaperStore from './store/usePaperStore';
import Phase1_LiteratureReview from './components/phases/Phase1_LiteratureReview';
import Phase2_Abstract from './components/phases/Phase2_Abstract';
import Phase3_Methodology from './components/phases/Phase3_Methodology';
import Phase4_Conclusion from './components/phases/Phase4_Conclusion';
import Phase5_GeneratedPaper from './components/phases/Phase5_GeneratedPaper';
import Phase6_Humanize from './components/phases/Phase6_Humanize';
import Phase7_Editor from './components/phases/Phase7_Editor';
import { AnimatePresence, motion } from 'framer-motion';

const phaseComponents: { [key: number]: React.ComponentType } = {
  1: Phase1_LiteratureReview,
  2: Phase2_Abstract,
  3: Phase3_Methodology,
  4: Phase4_Conclusion,
  5: Phase5_GeneratedPaper,
  6: Phase6_Humanize,
  7: Phase7_Editor,
};

function App() {
  const currentStep = usePaperStore((state) => state.currentStep);
  const CurrentPhaseComponent = phaseComponents[currentStep];

  return (
    <div className="flex flex-col h-screen font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {CurrentPhaseComponent && <CurrentPhaseComponent />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
