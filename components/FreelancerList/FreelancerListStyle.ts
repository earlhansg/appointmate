import { StyleSheet } from "react-native";

export const FreelancerListStyle = StyleSheet.create({
  textName: {
    color: "#ffffff",
    fontWeight: "500"
  },
  textSkill: {
    color: "#e5e5e5",
    fontSize: 11,
    marginTop: 3
  },
  textAddress:{
    color: "#e5e5e5",
    fontSize: 11
  },
  listContainer: {
    flexDirection: "row",
    // marginTop: 15,
    padding: 3,
    gap: 20
  },
  imgListContainer: {
    minWidth: 170,
    minHeight: 230
  },
  listPrimaryText2: {
    marginTop: 20,
    marginLeft: 10

  },
  imageContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});
