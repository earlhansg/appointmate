import React from "react";

import { View, Text, TouchableHighlight, Image } from "react-native";
import { DealsStyle } from "./DealsStyle";
import TouchableImageButton from "../Buttons/TouchableImageButton";

const Deals = () => {
  const dealsImage1 = require("../../assets/deals-images/cleaning.jpg");
  const dealsImage2 = require("../../assets/deals-images/beauty.jpg");

  const shopDeals = [
    {
      id: 1,
      imageUrl: dealsImage1,
      name: "Demetrio Cleaning Services",
      position: "shop",
      address: "Tomasaco Macasandig",
    },
    {
      id: 2,
      imageUrl: dealsImage2,
      name: "Beauty Standards",
      position: "shop",
      address: "CM Recto",
    },
  ];
  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <View>
      <Text>Your Daily Deals</Text>
      <View style={DealsStyle.container}>
        {shopDeals.map((deal) => (
          <TouchableImageButton
            key={deal.id}
            renderImage={(settings) => (
              <TouchableHighlight
                style={[
                  {
                    backgroundColor: "#f7f7f7",
                    height: 60,
                    width: 120,
                    marginTop: 5,
                    marginLeft: 10,
                    marginBottom: 5,
                    borderRadius: 10,
                  },
                ]}
                underlayColor={settings.underlayColor}
                onPress={navigate}
              >
                <Image
                  source={deal.imageUrl}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </TouchableHighlight>
            )}
          >
            <Text style={DealsStyle.text}>{deal.name}</Text>
          </TouchableImageButton>
        ))}
      </View>
    </View>
  );
};

export default Deals;
