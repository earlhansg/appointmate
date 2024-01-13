import { StyleSheet } from "react-native";

export const ScrollContentComponentStyle = StyleSheet.create({
  categoryNameText: {
    fontSize: 20,
    fontWeight: "500",
  },
  categoryCaptionText: {
    fontSize: 13,
    marginTop: 5,
  },
  serviceContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  serviceName: {
    fontSize: 15,
    fontWeight: "500",
  },
  servicePrice: {
    fontSize: 13,
    marginTop: 10,
  },
  imageContainer: {
    marginRight: 5,
    justifyContent: "center",
  },
  image: {
    width: 75,
    height: 50,
  },
});
