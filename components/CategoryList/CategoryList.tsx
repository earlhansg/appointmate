import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { GroupedData } from "../Categories/Categories";
import { CategoryListStyle } from "./CategoryListStyle";
import TouchableImageButton from "../Buttons/TouchableImageButton";

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
        <TouchableImageButton
          key={list.id}
          renderImage={(settings) => (
            <TouchableHighlight
              style={[{ ...settings.containerStyle }]}
              underlayColor={settings.underlayColor}
              onPress={navigate}
            >
              <Image
                source={imageUrl}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableHighlight>
          )}
        >
          <Text style={CategoryListStyle.text}>{list.name}</Text>
        </TouchableImageButton>
      ))}
    </View>
  );
};

export default CategoryList;
