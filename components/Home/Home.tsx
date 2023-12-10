import { SafeAreaView, ScrollView } from "react-native";
import Header from "../Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../Categories/Categories";
import Deals from "../Deals/Deals";
import TopFreelancers from "../TopFreelancers/TopFreelancers";
import TopShops from "../TopShops/TopShops";

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <ScrollView>
        <Header />
        <Categories />
        <TopFreelancers/>
        <TopShops/>
        {/* <Deals/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
