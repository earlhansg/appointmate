import { StyleSheet } from "react-native";

export const UserStyle = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  verifiedContainer: {
    maxWidth: 55,
    alignItems: "center",
    padding: 2,
    borderRadius: 25,
    marginTop: 3,
    marginBottom: 3,
  },
  verifiedText: {
    fontSize: 11, 
    fontWeight: "500"
  },
  connectedAccountText: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontWeight:"500", 
    fontSize: 15
  },
  connectedIcon: {
    marginRight: 15
  }
});
