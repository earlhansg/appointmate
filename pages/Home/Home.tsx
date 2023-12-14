import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../../components/Categories/Categories";
import Deals from "../../components/Deals/Deals";
import TopFreelancers from "../../components/TopFreelancers/TopFreelancers";
import TopShops from "../../components/TopShops/TopShops";
import Membership from "../../components/Membership/Membership";

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <Header />
      <ScrollView>
        <Categories />
        <TopFreelancers/>
        <TopShops/>
        <Deals/>
        <Membership/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
