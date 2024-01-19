import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Freelancers } from "../../components/TopFreelancers/model/Freelancer";
import { Shop } from "../../components/TopShops/model/Shop";
import { Service, ServicesByCategory } from "../../components/ScrollComponent/model/ServicesByCategory";


type UserData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
};

export type ScreenData = {
  label: string;
  data: UserData;
  header?: string;
};

export type CategoryData = {
  id: string;
  name: string;
};

export type CheckoutData = {
  checkoutData: Freelancers | Shop
}

export type ServiceCheckoutData = {
  checkoutData: Freelancers | Shop
  serviceCheckoutData: Service
}


type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Update: ScreenData;
  Favourites: undefined;
  Category: CategoryData;
  Checkout: CheckoutData;
  ServiceCheckout: ServiceCheckoutData;
};

export type Navigation = {
  navigation?: DrawerNavigationProp<
    RootStackParamList,
    "Home" | "Notifications" | "Profile" | "Update" | "Favourites" | "Category" | "Checkout" | "ServiceCheckout"
  >;
};
