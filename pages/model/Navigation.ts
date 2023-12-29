import { DrawerNavigationProp } from "@react-navigation/drawer";


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


type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Update: ScreenData;
  Favourites: undefined;
  Category: CategoryData;
};

export type Navigation = {
  navigation?: DrawerNavigationProp<
    RootStackParamList,
    "Home" | "Notifications" | "Profile" | "Update" | "Favourites" | "Category"
  >;
};
