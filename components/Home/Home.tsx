import { View, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <View>
        <Header />
        <Categories/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
