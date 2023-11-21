import { useContext } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
  const themeStyle = useContext(ThemeContext);
  const theme = {
    backgroundColor: themeStyle.primary.main,
  };
  return (
    <SafeAreaView style={HomeStyle.container} {...theme}>
      <View>
        <Header />
        <Text style={{ color: themeStyle.primary.main }}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
