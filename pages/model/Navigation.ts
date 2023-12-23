import { DrawerNavigationProp } from "@react-navigation/drawer";

type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Update: {
    label: string,
    data: {
      firstName?: string;
      lastName?: string;
      email?: string;
      mobileNumber?: string;
    };
  };
  // Add other screens as needed;
};

export type Navigation = {
  navigation?: DrawerNavigationProp<
    RootStackParamList,
    "Home" | "Notifications" | "Profile" | "Update"
  >;
};
