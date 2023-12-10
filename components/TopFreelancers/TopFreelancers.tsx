import React from "react";
import { View, SafeAreaView, ScrollView, Text, FlatList } from "react-native";
import FreelancerList from "./FreelancerList/FreelancerList";
import { TopFreelancersStyle } from "./TopFreelancersStyle";

export type Freelancers = {
    id: number;
    imageUrl: any;
    firstName: string;
    lastName: string;
    position: string;
    address: string;
}

const TopFreelancers = () => {
  const imageUrl1 = require("../../assets/business-images/business-picture1.png");
  const imageUrl2 = require("../../assets/business-images/business-picture2.png");

  const topFreelancers = [
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
  ];

  const keyExtractor = (item: Freelancers) => item.id.toString();
  return (
    <View style={TopFreelancersStyle.container}>
       <View>
        <Text style={TopFreelancersStyle.header}>Top freelancers</Text>
      </View>
      <FlatList
        data={topFreelancers}
        renderItem={({ item }) => (
            <FreelancerList key={item.id} freelancer={item} />
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopFreelancers;
