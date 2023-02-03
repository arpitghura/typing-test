import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const userState = useState(null)
    let sharedState = userState

    return (
      <AppContext.Provider value={sharedState}>
        {children}
      </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}