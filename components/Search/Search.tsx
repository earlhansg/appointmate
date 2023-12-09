import React from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchStyle } from "./SearchStyle";
import CustomButton from "../Buttons/Button";
import { IconType } from "../Buttons/Button";

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
          placeholder="Find Services"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={SearchStyle.filterContainer}>
        <CustomButton
          icon={{ type: IconType.Ionicon, name: "filter-outline" }}
          size={24}
          customStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
};

export default Search;
