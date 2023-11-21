import { useContext } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <View>
        <Header/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
