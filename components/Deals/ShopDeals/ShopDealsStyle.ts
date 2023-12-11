import { StyleSheet } from "react-native";

export const ShopDealsStyle = StyleSheet.create({
  container: {},
  header: {},
  imageButton: {
    backgroundColor: "white",
    maxHeight: 210,
    width: 280,
    marginTop: 35,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    // shadow ios & android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  ImageButtonContainer: {
    width: "100%",
    height: "85%",
    margin: 6,
    padding: 3
  },
  contentImage: {
    width: "96%", height: "90%", borderRadius: 10
  },
  textContainer: {
    flexDirection: "row", width: "95%", marginTop: 5
  },
  primaryTextContainer: {
    marginRight: "auto"
  },
  shopNameText: {
    fontSize: 12,
    fontWeight: "600"
  },
  shopAddressTest: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ababab"
  },
  reviewContainer: {
    flexDirection: "row", 
    alignContent: "center"
  },
  reviewText: {
    fontSize: 12,
    fontWeight: "600",
    marginRight: 5
  } 
});
