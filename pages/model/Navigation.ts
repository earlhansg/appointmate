import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Update: undefined;
};

export type Navigation = {
  navigation?: DrawerNavigationProp<RootStackParamList, "Home" | "Notifications" | "Profile" | "Update">;
};
