import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { GroupedData } from "../Categories";
import { CategoryListStyle } from "./CategoryListStyle";
import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { Navigation } from "../../../pages/model/Navigation";

type CatergoryListProps = {
  category: GroupedData;
  onButtonClick: (item: any) => void;
};

const CategoryList = ({ category, onButtonClick }: CatergoryListProps) => {
  const imageUrl = require("../../../assets/sampleimage2.png");

  return (
    <View style={CategoryListStyle.categoryContainer}>
      {category.list.map((list) => (
        <TouchableImageButton
          key={list.id}
          renderImage={(settings) => (
            <TouchableHighlight
              style={[{ ...settings.containerStyle }]}
              underlayColor={settings.underlayColor}
              onPress={() => onButtonClick(list)}
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
