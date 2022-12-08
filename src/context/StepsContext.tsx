import React, { createContext, Dispatch, useMemo, useState } from 'react';

export const StepsContext = createContext<{
  activeStep: number;
  setActiveStep: Dispatch<React.SetStateAction<number>>;
}>({
  activeStep: 1,
  setActiveStep: () => {},
});

interface StepsProviderProps {
  children: React.ReactNode;
}

const StepsProvider = ({ children }: StepsProviderProps) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const ctxValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
    }),
    [activeStep]
  );

  return (
    <StepsContext.Provider value={ctxValue}>{children}</StepsContext.Provider>
  );
};

export default StepsProvider;
