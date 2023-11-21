import { StyleSheet } from "react-native";

export const LocationStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  contentContainer: {
    marginLeft: 5,
  },
  contentPrimary: {
    fontWeight: "500"
  },
  contentSecondary: {
    fontSize: 11,
  },
});
