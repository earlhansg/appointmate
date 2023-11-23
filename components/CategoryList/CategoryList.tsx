import React from "react";
import { View, Text, Image } from "react-native";
import { GroupedData } from "../Categories/Categories";
import { CategoryListStyle } from "./CategoryListStyle";

type CatergoryListProps = {
  category: GroupedData;
};

const CategoryList = ({ category }: CatergoryListProps) => {
  const imageUrl = require("../../assets/sampleimage2.png");
  return (
    <View style={CategoryListStyle.categoryContainer}>
      {category.list.map((list, index) => (
        <View key={index} style={[CategoryListStyle.catergoryListContainer]}>
          <Image source={imageUrl} resizeMode="contain" style={{ width: "100%", height: "100%" }}/>
          <Text style={CategoryListStyle.text}>{list.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryList;
