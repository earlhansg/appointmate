import { StyleSheet } from "react-native";

export const ProfileStyle = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: "#ffffff" },
  headerContainer: {
    margin: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    borderColor: "#e0e0e0",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerIconContainer: {
    width: "10%", 
    height: 20
  },
  headerText: {
    fontWeight:"500", 
    fontSize: 14
  }
});
