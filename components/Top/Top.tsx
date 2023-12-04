import React from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";

import { TopStyle } from "./TopStyle";

type TopData = {
  id: number;
  imageUrl: any;
  firstName: string;
  lastName: string;
  position: string;
  address: string;
};

const Top = () => {
  const imageUrl1 = require("../../assets/business-images/business-picture1.png");
  const imageUrl2 = require("../../assets/business-images/business-picture2.png");
  const backgroundColorSecondary = require("../../assets/background-images/top-bg-secondary.png");
  const backgroundColorTertiary = require("../../assets/background-images/top-bg-tertiary.png");

  const topData = [
    {
      id: 1,
      imageUrl: imageUrl1,
      firstName: "Esther",
      lastName: "Howard",
      position: "Consultant",
      address: "Camaman-an",
    },
    {
      id: 2,
      imageUrl: imageUrl2,
      firstName: "Mia",
      lastName: "Lester",
      position: "Doctor",
      address: "Bulua",
    },
    {
      id: 3,
      imageUrl: imageUrl1,
      firstName: "Mia",
      lastName: "Lester",
      position: "Doctor",
      address: "Bulua",
    },
    {
      id: 4,
      imageUrl: imageUrl2,
      firstName: "Mia",
      lastName: "Lester",
      position: "Doctor",
      address: "Bulua",
    }
  ];
  const keyExtractor = (item: TopData) => item.id.toString();
  return (
    <View style={TopStyle.topContainer}>
      <View>
        <Text style={TopStyle.topHeaderText}>Top Freelancer</Text>
      </View>
      <FlatList
        data={topData}
        renderItem={({ item }) => (
          <View style={TopStyle.listContainer}>
            <ImageBackground
              source={ item.id % 2 === 0 ? backgroundColorTertiary : backgroundColorSecondary}
              style={[TopStyle.imgListContainer, {marginLeft: item.id === 1 ? 0 : 15, marginRight: item.id === 4 ? 15 : 0}]}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={TopStyle.listPrimaryText2}>
                <Text style={TopStyle.textName}>{`${item.firstName} ${item.lastName}`}</Text>
                <Text style={TopStyle.textSkill}>{item.position}</Text>
                <Text style={TopStyle.textAddress}>{item.address}</Text>
              </View>
              <View style={TopStyle.imageContainer}>
                <Image
                  source={item.imageUrl}
                  resizeMode="contain"
                  style={{ width: 130, height: 150 }}
                />
              </View>
            </ImageBackground>
          </View>
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Top;
