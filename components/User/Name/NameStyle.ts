import { StyleSheet } from "react-native";

export const NameStyle = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: "#ffffff" },
  headerContainer: {
    margin: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    borderColor: "#e0e0e0",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerIconContainer: {
    width: "10%",
    height: 20,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 14,
  },
  input: {
    marginTop: 20,
    borderWidth: 0.8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 10,
  },
  contentContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  labelInput: {
    position: "absolute",
    top: 9,
    left: 15,
    backgroundColor: "#ffffff",
    zIndex: 200,
    paddingLeft: 3,
    paddingRight: 3,
    fontSize: 13,
  },
});
