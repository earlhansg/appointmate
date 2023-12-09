import React from "react";
import { View, Text, FlatList, ViewStyle } from "react-native";

import { TopStyle } from "./TopStyle";

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
  styles?: ViewStyle
  children: (item: TopItem) => React.ReactNode;
}


const Top = <T extends TopItem> ({header, items, styles, children } : TopProps<T> ) => {
  const keyExtractor = (item: TopItem) => item.id.toString();
  return (
    <View style={TopStyle.topContainer}>
      <View>
        <Text style={TopStyle.topHeaderText}>{header}</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          // <FreelancerList key={item.id} freelancer={item}/>
          <>
            {children(item)}
          </>
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles]}
      />
    </View>
  );
};

export default Top;
