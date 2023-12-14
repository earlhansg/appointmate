import React from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchStyle } from "./SearchStyle";

const Search = () => {
  return (
    <View style={SearchStyle.container}>
      <View style={SearchStyle.searchContainer}>
        <AntDesign
          style={SearchStyle.searchIcon}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          style={SearchStyle.input}
          placeholder="Search..."
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export default Search;
