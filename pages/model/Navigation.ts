import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
};

export type Navigation = {
  navigation: DrawerNavigationProp<RootStackParamList, "Home">;
};
