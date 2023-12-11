import React from "react";

import { View, Text, TouchableHighlight, Image, FlatList } from "react-native";
import { DealsStyle } from "./DealsStyle";
import TouchableImageButton from "../Buttons/TouchableImageButton";

import { AntDesign } from '@expo/vector-icons';

type ShopDeal = {
  id: number;
  imageUrl: any;
  name: string;
  position: string;
  address: string;
};

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
  const keyExtractor = (item: ShopDeal) => item.id.toString();
  return (
    <View style={DealsStyle.container}>
      <View>
        <Text style={DealsStyle.header}>Your daily deals</Text>
      </View>
      <View style={{backgroundColor: "#eff3f7"}}>
      <FlatList
        data={shopDeals}
        renderItem={({ item }) => (
          <TouchableImageButton
            key={item.id}
            renderImage={(settings) => (
              <TouchableHighlight
                style={[
                  {
                    backgroundColor: "white",
                    maxHeight: 210,
                    width: 280,
                    marginTop: 35,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 10
                  },
                ]}
                underlayColor={settings.underlayColor}
                onPress={navigate}
              >
                <View style={{
                  width: "100%",
                  height: "85%",
                  margin: 6,
                  padding: 3
                }}>
                  <Image
                    source={item.imageUrl}
                    resizeMode="cover"
                    style={{ width: "96%", height: "90%", borderRadius: 10 }}
                  />
                  <View style={{flexDirection: "row", width: "95%", marginTop: 5}}>
                    <View style={{marginRight: "auto"}}>
                      <Text style={{
                        fontSize: 12,
                        fontWeight: "600"
                      }}>{item.name}</Text>
                      <Text style={{
                        fontSize: 12,
                        fontWeight: "500",
                        color: "#ababab"
                      }}>{item.address}</Text>
                    </View>
                    <View style={{flexDirection: "row", alignContent: "center"}}>
                      <AntDesign name="star" size={12} color="#ffb413" style={{
                        margin: 2
                      }} />
                      <Text style={{
                        fontSize: 12,
                        fontWeight: "600",
                        marginRight: 5
                      }}>4.6</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          >
          </TouchableImageButton>
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
    </View>
  );
};

export default Deals;
