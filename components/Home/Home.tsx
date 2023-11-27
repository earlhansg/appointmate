import { View, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../Categories/Categories";
import Top from "../Top/Top";

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <View>
        <Header />
        <Categories/>
        <Top/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
