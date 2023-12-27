import { StyleSheet } from "react-native";

export const SlideShopsScreenStyle = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 10,
    gap: 10,
  },
  pressableContainer: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
  },
  pressableText: {
    fontWeight: "500",
    fontSize: 13,
  },
  imageButton: {
    margin: 0,
    padding: 0,
    maxHeight: 210,
    width: "100%",
    borderRadius: 0,
  },
  imageButtonContainer: {
    height: "90%",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
  },
  contentImage: {
    borderRadius: 10,
    width: "100%",
    height: "90%",
  },
  shopNameText: {
    fontSize: 13,
    fontWeight: "600",
  },
  reviewText: {
    fontSize: 13,
    fontWeight: "600",
  }
});
