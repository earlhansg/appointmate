import React, { createContext, ReactNode } from "react";
import { Freelancers } from "../TopFreelancers/model/Freelancer";
import { Shop } from "../TopShops/model/Shop";

type NavigationContextProps = {
  navigate: (data: Freelancers | Shop) => void;
}

type NavigationContextProviderProps = {
  children: ReactNode;
  screen: (checkoutData: Freelancers | Shop) => void;
}

export const NavigationContext = createContext<{navigate: (checkoutData: Freelancers | Shop) => void } | null>(null);

const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({ children, screen }: NavigationContextProviderProps) => {

const contextValue: NavigationContextProps = {
  navigate: screen
};

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
