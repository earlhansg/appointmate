import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home/Home";
import ThemeContextProvider from "./components/ThemeContext/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
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
