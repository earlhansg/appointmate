import { StyleSheet } from "react-native";

export const FavouriteFreelancerListStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    width: "95%",
    borderRadius: 20,
  },
  primaryHeaderContainer: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  primaryHeaderImage: {
    width: "35%",
    maxHeight: 120,
    borderRadius: 35,
  },
  primaryHeaderContent: {
    justifyContent: "center",
    maxWidth: 165,
    overflow: "hidden",
    marginLeft: 20,
  },
  primaryHeaderContent1: {
    fontSize: 16,
    fontWeight: "500",
  },
  primaryHeaderContent2: {
    fontSize: 13,
  },
  primaryHeaderContent3: {
    fontSize: 15,
    marginTop: 10,
  },
  secondaryHeaderContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "center",
    gap: 25,
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
  },
  secondaryHeaderContent1: {
    fontSize: 15,
  },
  secondaryHeaderContent2: {
    fontSize: 16,
    fontWeight: "500",
  },
  appointNowPressable: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
  },
});
