import React from "react";
import { View, Text, Image } from "react-native";

import { TopStyle } from "./TopStyle";

const Top = () => {
  const imageUrl1 = require("../../assets/business-images/business-picture1.png");
  const imageUrl2 = require("../../assets/business-images/business-picture2.png");
  return (
    <View style={TopStyle.topContainer}>
      <View>
        <Text style={TopStyle.topHeaderText}>Top Freelancer</Text>
      </View>
      <View style={TopStyle.listsContainer}>
        <View style={TopStyle.listContainer}>
            <View style={TopStyle.listPrimaryText}>
                <Text style={TopStyle.textColorWhite}>Esther Howard</Text>
                <Text style={TopStyle.textColorWhite}>Magician</Text>
                <Text style={TopStyle.textColorWhite}>CDO</Text>
            </View>
            <View style={TopStyle.imageContainer}>
            <Image source={imageUrl1} style={{ width: "70%", height:"100%" }} />
            </View>
        </View>
        <View style={TopStyle.listContainer}>
            <View style={TopStyle.listPrimaryText}>
                <Text style={TopStyle.textColorWhite}>Sophia Wilson</Text>
                <Text style={TopStyle.textColorWhite}>Event Designer</Text>
                <Text style={TopStyle.textColorWhite}>Bukidnon</Text>
            </View>
            <View style={TopStyle.imageContainer}>
            <Image source={imageUrl2} style={{ width: "70%", height:"100%" }}  />
            </View>
        </View>
      </View>
    </View>
  );
};

export default Top;
