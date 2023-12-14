import { StyleSheet } from "react-native";

export const LocationStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flexGrow: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  firstContent: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  firstContentText: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  secondContent: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
