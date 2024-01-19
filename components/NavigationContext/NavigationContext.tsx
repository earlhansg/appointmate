import React, { createContext, ReactNode } from "react";
import { Freelancers } from "../TopFreelancers/model/Freelancer";
import { Shop } from "../TopShops/model/Shop";
import { Service, ServicesByCategory } from "../ScrollComponent/model/ServicesByCategory";

type ServiceCheckoutProps = {
  checkoutData: Freelancers | Shop;
  serviceCheckoutData: Service;
};

type NavigationContextProps = {
  navigateToCheckout?: (data: Freelancers | Shop) => void;
  navigateToServiceCheckout?: (checkoutData: Freelancers | Shop, serviceCheckoutData: Service) => void;
  // navigateToServiceCheckout?: (props: ServiceCheckoutProps) => void;
};

type NavigationContextProviderProps = {
  children: ReactNode;
  checkout?: NavigationContextProps["navigateToCheckout"];
  serviceCheckout?: NavigationContextProps["navigateToServiceCheckout"];
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
