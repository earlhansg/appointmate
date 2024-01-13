import React, { createContext, ReactNode } from "react";
import { Freelancers } from "../TopFreelancers/model/Freelancer";
import { Shop } from "../TopShops/model/Shop";
import { Service } from "../ScrollComponent/model/ServicesByCategory";

type NavigationContextProps = {
  navigateToCheckout?: (data: Freelancers | Shop) => void;
  navigateToServiceCheckout?: () => void;
};

type NavigationContextProviderProps = {
  children: ReactNode;
  checkout?: (checkoutData: Freelancers | Shop) => void;
  serviceCheckout?: () => void;
};

export const NavigationContext = createContext<NavigationContextProps>({
  navigateToCheckout: () => {},
  navigateToServiceCheckout: () => {}
});

const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({
  children,
  checkout,
  serviceCheckout
}: NavigationContextProviderProps) => {
  const contextValue: NavigationContextProps = {
    navigateToCheckout: checkout,
    navigateToServiceCheckout: serviceCheckout
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
