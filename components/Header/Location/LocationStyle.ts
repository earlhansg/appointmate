import { StyleSheet } from "react-native";

export const LocationStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  iconContainer: {
    width: "10%",
    flexDirection: "row",
    alignItems: "center"
  },
  contentContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
  },
  firstContent: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "center"
  },
  firstContentText: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  secondContent: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems:'center',
  },
});
