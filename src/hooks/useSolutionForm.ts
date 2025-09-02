import { useState } from 'react';

export const useSolutionForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<string>('');

  const openForm = (solution: string) => {
    setCurrentSolution(solution);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentSolution('');
  };

  return {
    isFormOpen,
    currentSolution,
    openForm,
    closeForm
  };
};
