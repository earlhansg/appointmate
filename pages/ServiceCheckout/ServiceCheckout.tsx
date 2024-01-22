import React, { useContext } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import ButtonIcon from "../../components/Buttons/ButtonIcon";

import { Entypo, MaterialIcons, Feather, Octicons } from "@expo/vector-icons";
import { ServiceCheckoutStyle } from "./ServiceCheckoutStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { Navigation, ServiceCheckoutData } from "../model/Navigation";

import { useRoute, RouteProp } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";

type ServiceRouteProps = {
  route: RouteProp<
    {
      ServiceCheckout: ServiceCheckoutData;
    },
    "ServiceCheckout"
  >;
};

const ServiceCheckout = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);

  const route = useRoute<ServiceRouteProps["route"]>();
  const { checkoutData, serviceCheckoutData } = route.params || { data: {} };

  const aircon = require("../../assets/checkout-images/air-conditioner-3.png");


  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
  return (
    <SafeAreaView style={ServiceCheckoutStyle.container}>
      <View
        style={ServiceCheckoutStyle.headerContainer}
      >
        <ScrollView
          stickyHeaderIndices={[1]}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={[ServiceCheckoutStyle.headerIconContainer]}>
            <Image
              source={aircon}
              resizeMode="contain"
              style={{
                width: "100%",
                height: 170,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 25,
                left: 10,
              }}
            >
              <ButtonIcon
                renderIcon={(settings) => (
                  <Entypo name="cross" color={theme.primary.color} size={20} />
                )}
                // onClick={handleClickMenuBar}
                onClick={() =>
                  navigation?.navigate("Checkout", { checkoutData })
                }
              />
            </View>
          </View>
          <View
            style={{
              padding: 10,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: "#e0e0e0",
              backgroundColor: "white",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 270,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Cleaning 1
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 13,
                    color: theme.gray.light3,
                  }}
                >
                  Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1
                  Cleaning 1 Cleaning 1
                </Text>
              </View>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 13,
                  fontWeight: "500",
                }}
              >
                156.00
              </Text>
            </View>
          </View>

          <View
            style={{
              margin: 10,
              padding: 10,
              borderTopWidth: 1,
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderColor: theme.gray.light1,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Service options
            </Text>
            <View
              style={{
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 10,
                paddingRight: 10,
                borderWidth: 2,
                borderColor: theme.primary.color,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                Home Service
              </Text>
            </View>
            <View
              style={{
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 10,
                paddingRight: 10,
                borderWidth: 2,
                borderColor: theme.gray.light1,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                In Shop
              </Text>
            </View>
          </View>

          <View
            style={{
              margin: 10,
              padding: 10,
              borderTopWidth: 1,
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderColor: theme.gray.light1,
              borderRadius: 5,
            }}
          >
            <View style={{ flexDirection: "row", gap: 7 }}>
              <MaterialIcons
                name="payment"
                size={20}
                color={theme.primary.color}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Payment method
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
              <Entypo name="plus" size={20} color={theme.primary.color} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  alignSelf: "center",
                  color: theme.primary.color,
                }}
              >
                Add a payment method
              </Text>
            </View>
          </View>

          <View
            style={{
              margin: 10,
              paddingBottom: 10,
              borderTopWidth: 1,
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderColor: theme.gray.light1,
              borderRadius: 5,
            }}
          >
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View
                style={{ flexDirection: "row", gap: 5, marginRight: "auto" }}
              >
                <Feather name="map-pin" size={20} color={theme.primary.color} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Delivery address
                </Text>
              </View>
              <Octicons
                name="pencil"
                size={20}
                color={theme.primary.color}
                style={{ alignSelf: "flex-start" }}
              />
            </View>
            <View
              style={{
                backgroundColor: theme.gray.light1,
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 70,
                  borderRadius: 5,
                }}
              ></View>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.gray.light1,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "500" }}>Home</Text>
              <Text style={{ fontSize: 12 }}>Five Distribution Rectan</Text>
              <Text style={{ fontSize: 12 }}>Cagayan de Oro City</Text>
            </View>
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 15,
                paddingRight: 15,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: theme.gray.light3,
                  marginRight: "auto",
                }}
              >
                Frankee's Bar
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color={theme.primary.color}
              />
            </View>
          </View>

          <View style={{
              margin: 10,
              paddingBottom: 10,
              borderTopWidth: 1,
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderColor: theme.gray.light1,
              borderRadius: 5,
            }}>

            <View style={{ flexDirection: "row", paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
              <View
                style={{ flexDirection: "row", gap: 5, marginRight: "auto" }}
              >
                <MaterialIcons name="schedule" size={20} color={theme.primary.color} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Select schedule
                </Text>
              </View>
            </View>
            
            <Calendar
              minDate={"2024-01-01"}
              onDayPress={(day) => {
                console.log("selected day", day);
              }}
              enableSwipeMonths={true}
              markedDates={{
                "2024-01-25": {
                  dots: [vacation, massage, workout],
                  disabled: true,
                },
                "2024-01-26": { dots: [massage, workout], disabled: true },
              }}
            />
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServiceCheckout;
