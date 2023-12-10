import React from "react";
import { View, Text, FlatList } from "react-native";
import { TopShopsStyle } from "./TopShopsStyle";
import ShopsList from "./ShopsList/ShopsList";

export type Shop = {
    id: number;
    imageUrl: any;
    name: string;
    position: string;
    address: string;
}

const TopShops = () => {
  const shopImage1 = require("../../assets/service-images/car.jpg");
  const shopImage2 = require("../../assets/service-images/beauty.jpg");
  const shopImage3 = require("../../assets/service-images/homecleaning.jpg");
  const topShops = [
    {
      id: 1,
      imageUrl: shopImage1,
      name: "Advance Car Repairsss",
      position: "Shop",
      address: "Camaman-an",
    },
    {
      id: 2,
      imageUrl: shopImage2,
      name: "Miran Curl",
      position: "Shop",
      address: "Pabayo",
    },
    {
      id: 3,
      imageUrl: shopImage3,
      name: "Dirt Bag",
      position: "Shop",
      address: "12th Nazareth",
    },
    {
      id: 4,
      imageUrl: shopImage3,
      name: "Dirt Bag",
      position: "Shop",
      address: "12th Nazareth",
    },
    {
      id: 5,
      imageUrl: shopImage3,
      name: "Dirt Bag",
      position: "Shop",
      address: "12th Nazareth",
    },
  ];

  const keyExtractor = (item: Shop) => item.id.toString();
  return (
    <View style={TopShopsStyle.container}>
      <View>
        <Text style={TopShopsStyle.header}>Top shops</Text>
      </View>
      <FlatList
        data={topShops}
        renderItem={({ item }) => (
            <ShopsList key={item.id} shop={item} />
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopShops;
