import React from "react";
import { View, Text, FlatList } from "react-native";

import { TopStyle } from "./TopStyle";

import FreelancerList from "../FreelancerList/FreelancerList";

export type TopData = {
  id: number;
  imageUrl: any;
  firstName: string;
  lastName: string;
  position: string;
  address: string;
};

const Top = () => {
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

  const keyExtractor = (item: TopData) => item.id.toString();
  return (
    <View style={TopStyle.topContainer}>
      <View>
        <Text style={TopStyle.topHeaderText}>Top Freelancer</Text>
      </View>
      <FlatList
        data={topData}
        renderItem={({ item }) => (
          <FreelancerList key={item.id} freelancer={item}/>
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Top;
