import React from "react";
import { View, Text, Image } from "react-native";
import { GroupedData } from "../Categories/Categories";
import { CategoryListStyle } from "./CategoryListStyle";
import ImageButton from "../ImageButton/ImageButton";

type CatergoryListProps = {
  category: GroupedData;
};

const CategoryList = ({ category }: CatergoryListProps) => {
  const imageUrl = require("../../assets/sampleimage2.png");

  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <View style={CategoryListStyle.categoryContainer}>
      {category.list.map((list) => (
        <ImageButton
          key={list.id}
          containerSyle={{
            backgroundColor: "#f7f7f7",
            height: 60,
            width: 65,
            marginLeft: 10,
            marginBottom: 20,
            borderRadius: 10,
          }}
          handleClick={({ isClick }) => (isClick ? navigate() : null)}
        >
          <Text style={CategoryListStyle.text}>{list.name}</Text>
        </ImageButton>
      ))}
    </View>
  );
};

export default CategoryList;
