import { View, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import { HomeStyle } from "./HomeStyle";

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Home;
