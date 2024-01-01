import React, { createContext, ReactNode } from "react";

interface NavigationContextProps {
  navigate: () => void;
}

interface NavigationContextProviderProps {
  children: ReactNode;
  nav: () => void;
}

export const NavigationContext = createContext<{navigate: () => void } | null>(null);

const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({ children, nav }: NavigationContextProviderProps) => {

const contextValue: NavigationContextProps = {
  navigate: nav
};

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
