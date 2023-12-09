import React from "react";
import { View, Text, FlatList } from "react-native";

import { TopStyle } from "./TopStyle";

import FreelancerList from "../FreelancerList/FreelancerList";

export type TopItem = {
  id: number;
  imageUrl: any;
  firstName?: string;
  lastName?: string;
  name?: string;
  position: string;
  address: string;
}

export type TopProps<T> = {
  header?: string;
  items: T[];
}


const Top = <T extends TopItem> ({header, items} : TopProps<T> ) => {
  const keyExtractor = (item: TopItem) => item.id.toString();
  return (
    <View style={TopStyle.topContainer}>
      <View>
        <Text style={TopStyle.topHeaderText}>{header}</Text>
      </View>
      <FlatList
        data={items}
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
