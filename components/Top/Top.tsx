import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import { TopStyle } from "./TopStyle";

const Top = () => {
  const imageUrl1 = require("../../assets/business-images/business-picture1.png");
  const imageUrl2 = require("../../assets/business-images/business-picture2.png");
  const backgroundColorSecondary = require("../../assets/background-images/top-bg-secondary.png");
  const backgroundColorTertiary = require("../../assets/background-images/top-bg-tertiary.png");

  return (
    <View style={TopStyle.topContainer}>
      <View>
        <Text style={TopStyle.topHeaderText}>Top Freelancer</Text>
      </View>
      <View style={TopStyle.listContainer}>
        <ImageBackground
          source={backgroundColorSecondary}
          style={TopStyle.imgListContainer}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={TopStyle.listPrimaryText2}>
            <Text style={TopStyle.textName}>Esther Howard</Text>
            <Text style={TopStyle.textSkill}>Consultant</Text>
            <Text style={TopStyle.textAddress}>CDO</Text>
          </View>
          <View style={TopStyle.imageContainer}>
            <Image
              source={imageUrl1}
              resizeMode="contain"
              style={{ width: 130, height: 150 }}
            />
          </View>
        </ImageBackground>

        <ImageBackground
          source={backgroundColorTertiary}
          style={TopStyle.imgListContainer}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={TopStyle.listPrimaryText2}>
            <Text style={TopStyle.textName}>Mia Lester</Text>
            <Text style={TopStyle.textSkill}>Doctor</Text>
            <Text style={TopStyle.textAddress}>Bulua</Text>
          </View>
          <View style={TopStyle.imageContainer}>
            <Image
              source={imageUrl2}
              resizeMode="contain"
              style={{ width: 130, height: 150 }}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Top;
