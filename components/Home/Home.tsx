import { View, SafeAreaView } from "react-native";
import Header from "../Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../Categories/Categories";
import Top from "../Top/Top";

const Home = () => {
  const imageUrl1 = require("../../assets/business-images/business-picture1.png");
  const imageUrl2 = require("../../assets/business-images/business-picture2.png");

  const topData = [
    {
      id: 1,
      imageUrl: imageUrl1,
      firstName: "Esther",
      lastName: "Howard",
      position: "Consultant",
      address: "Camaman-an",
    },
    {
      id: 2,
      imageUrl: imageUrl2,
      firstName: "Mia",
      lastName: "Lester",
      position: "Doctor",
      address: "Bulua",
    },
    {
      id: 3,
      imageUrl: imageUrl1,
      firstName: "Mia",
      lastName: "Lester",
      position: "Doctor",
      address: "Bulua",
    },
    {
      id: 4,
      imageUrl: imageUrl2,
      firstName: "Mia",
      lastName: "Lester",
      position: "Doctor",
      address: "Bulua",
    }
  ];
  return (
    <SafeAreaView style={HomeStyle.container}>
      <View>
        <Header />
        <Categories/>
        <Top header="Top freelancers" items={topData}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
