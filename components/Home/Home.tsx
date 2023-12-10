import { View, SafeAreaView, ScrollView } from "react-native";
import Header from "../Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../Categories/Categories";
import Top from "../Top/Top";
import FreelancerList from "../TopFreelancers/FreelancerList/FreelancerList";
import ShopsList from "../ShopsList/ShopsList";
import Deals from "../Deals/Deals";
import TopFreelancers from "../TopFreelancers/TopFreelancers";

const Home = () => {
  const imageUrl1 = require("../../assets/business-images/business-picture1.png");
  const imageUrl2 = require("../../assets/business-images/business-picture2.png");

  const shopImage1 = require("../../assets/service-images/car.jpg");
  const shopImage2 = require("../../assets/service-images/beauty.jpg");
  const shopImage3 = require("../../assets/service-images/homecleaning.jpg");
  
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
    }
  ];

  const shopData = [
    {
      id: 1,
      imageUrl: shopImage1,
      name: "Advance Car Repairsss",
      position: "Shop",
      address: "Camaman-an"
    },
    {
      id: 2,
      imageUrl: shopImage2,
      name: "Miran Curl",
      position: "Shop",
      address: "Pabayo"
    },
    {
      id: 3,
      imageUrl: shopImage3,
      name: "Dirt Bag",
      position: "Shop",
      address: "12th Nazareth"
    },
    {
      id: 4,
      imageUrl: shopImage3,
      name: "Dirt Bag",
      position: "Shop",
      address: "12th Nazareth"
    },
    {
      id: 5,
      imageUrl: shopImage3,
      name: "Dirt Bag",
      position: "Shop",
      address: "12th Nazareth"
    }
  ]


  return (
    <SafeAreaView style={HomeStyle.container}>
      <ScrollView>
        <Header />
        <Categories />
        {/* <Top header="Top freelancers" items={topData}>
          {(item) => <FreelancerList key={item.id} freelancer={item} />}
        </Top> */}
        <TopFreelancers/>
        <Top
          header="Popular Shops"
          items={shopData}
          styles={{ flexDirection: "row" }}
        >
          {(item) => <ShopsList key={item.id} shop={item} />}
        </Top>
        {/* <Deals/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
