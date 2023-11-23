import React from "react";
import { View, Text } from "react-native";
import { GroupedData } from "../Categories/Categories";
import { CategoryListStyle } from "./CategoryListStyle";

type CatergoryListProps = {
  category: GroupedData;
};

const CategoryList = ({ category }: CatergoryListProps) => {
  return (
    <View style={CategoryListStyle.categoryContainer}>
      {category.list.map((list, index) => (
        <View key={index} style={[CategoryListStyle.catergoryListContainer]}>
          <Text>{list.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryList;
