import { StyleSheet } from "react-native";

export const TopStyle = StyleSheet.create({
  topContainer: {
    // flexDirection: "row"
    marginTop: 25,
    marginLeft: 10
  },
  topHeaderText: {
    fontSize: 16,
    fontWeight: "500"
  },
  listsContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20
  },
  listContainer: {
    backgroundColor:"#542E71",
    minWidth: 175,
    height: 270,
    paddingTop: 15,
    borderRadius: 20,
    // paddingLeft: 10,
    // paddingRight: 10
    overflow: "hidden"
  },
  listPrimaryText: {
    marginBottom: "auto",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageContainer: {
    alignItems: "flex-end",
    // backgroundColor: "pink",
    flexBasis: 150
  },
  textColorWhite: {
    color: "white"
  }
});
