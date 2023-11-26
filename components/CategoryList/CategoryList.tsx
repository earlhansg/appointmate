import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { GroupedData } from "../Categories/Categories";
import { CategoryListStyle } from "./CategoryListStyle";
import ImageButton from "../ImageButton/ImageButton";

type CatergoryListProps = {
  category: GroupedData;
};

const CategoryList = ({ category }: CatergoryListProps) => {
  const imageUrl = require("../../assets/sampleimage2.png");

  const navigate = (isClick: boolean) => {
    console.log("im click in Try");
  };
  return (
    <View style={CategoryListStyle.categoryContainer}>
      {category.list.map((list) => (
        <ImageButton
          key={list.id}
          containerStyle={{
            backgroundColor: "#f7f7f7",
            height: 60,
            width: 65,
            marginTop: 5,
            marginLeft: 10,
            marginBottom: 5,
            borderRadius: 10
          }}
          handleClick={({ onPress }) => (onPress ? navigate(onPress) : null)}
        >
          <Text style={CategoryListStyle.text}>{list.name}</Text>
        </ImageButton>
      ))}
    </View>
  );
};

export default CategoryList;
