import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ThemeContextProvider from "./components/ThemeContext/ThemeContext";
import SideNav from "./components/SideNav/SideNav";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <SideNav/>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
