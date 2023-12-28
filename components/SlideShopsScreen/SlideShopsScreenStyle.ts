import { StyleSheet } from "react-native";

export const SlideShopsScreenStyle = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
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
    paddingLeft: 5,
    paddingRight: 5,
    maxHeight: 220,
    borderRadius: 0,
    overflow: 'hidden'
  },
  imageButtonContainer: {
    height: "87%",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 5
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
    fontWeight: "600"
  },
  promoContainer: {
    position: "absolute",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 0,
    marginTop: 12,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 100,
  },
});
