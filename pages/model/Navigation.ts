import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type Navigation = {
  navigation?: DrawerNavigationProp<RootStackParamList, "Home", "Profile">;
};
