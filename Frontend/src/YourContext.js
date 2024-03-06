// YourContext.js
import React, { createContext, useContext } from 'react';

const YourContext = createContext();

export const YourContextProvider = ({ children }) => {
  // Provide your context values here
  const contextValue = {/* your context values */};

  return (
    <YourContext.Provider value={contextValue}>
      {children}
    </YourContext.Provider>
  );
};

export const useYourContext = () => {
  return useContext(YourContext);
};
