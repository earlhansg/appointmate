import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import ButtonIcon from "../../components/Buttons/ButtonIcon";

import { Entypo, MaterialIcons, Feather, Octicons } from "@expo/vector-icons";
import { ServiceCheckoutStyle } from "./ServiceCheckoutStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { Navigation, ServiceCheckoutData } from "../model/Navigation";

import { useRoute, RouteProp } from "@react-navigation/native";
import {
  Calendar,
  TimelineList,
  TimelineEventProps,
  CalendarUtils,
  CalendarProvider,
  ExpandableCalendar,
  DateData,
} from "react-native-calendars";

import { groupBy } from "lodash";

const today = new Date();
export const getInitialDate = (offset = 0) =>
  CalendarUtils.getCalendarDateString(
    new Date().setDate(today.getDate() + offset)
  );

type ServiceRouteProps = {
  route: RouteProp<
    {
      ServiceCheckout: ServiceCheckoutData;
    },
    "ServiceCheckout"
  >;
};

const INITIAL_DATE = getInitialDate();

const timeSettings = {
  start: {
    hour: 6,
    minutes: 30
  },
  end: {
    hour: 17,
    minutes: 30
  },
  break: {
    hour: 1,
    minutes: 0
  }
}

// Function to print time in half-hour intervals between 6:30 AM and 5:30 PM for a given date
const listOfTimeIntervals = (date: Date) => {
  // Set the desired start and end times (in hours and minutes)
  const intervals = [];
  const startHour = timeSettings.start.hour;
  const startMinute = timeSettings.start.minutes;
  const endHour = timeSettings.end.hour;
  const endMinute = timeSettings.end.minutes;

  // Create new Date objects for the same date at the start and end times
  const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, startMinute, 0);
  const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), endHour, endMinute, 0);

  // Loop through the half-hour intervals and print them
  while (startTime <= endTime) {
    // console.log(startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    intervals.push(startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
    startTime.setMinutes(startTime.getMinutes() + timeSettings.break.minutes);
    startTime.setHours(startTime.getHours() + timeSettings.break.hour);
  }
  return intervals;
}

// Example usage
const currentDate = new Date(2023-1-29); // Current date and time
// console.log("Half-hour intervals between 6:30 AM and 5:30 PM:");
console.log("listOfTimeIntervals", listOfTimeIntervals(currentDate));


const ServiceCheckout = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);

  const route = useRoute<ServiceRouteProps["route"]>();
  const { checkoutData, serviceCheckoutData } = route.params || { data: {} };

  const aircon = require("../../assets/checkout-images/air-conditioner-3.png");

  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const timeList = listOfTimeIntervals(currentDate);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      ["2024-01-28"]: {
        // dotColor: 'red'
        disabled: true,
      },
      ["2024-01-30"]: {
        // dotColor: 'red',
        disabled: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "orange",
        selectedTextColor: "red",
      },
    };
  }, [selected]);

  const unAvailableDates = useMemo(() => {
    return {
      ["2024-01-3"]: {
        // dotColor: 'red'
        disabled: true,
      },
      ["2024-01-30"]: {
        // dotColor: 'red',
        disabled: true,
      },
    };
  }, [selected]);

  const selectedDay = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: theme.primary.color,
        // selectedTextColor: 'red'
      },
    };
  }, [selected]);

  return (
    <SafeAreaView style={ServiceCheckoutStyle.container}>
      <View style={ServiceCheckoutStyle.headerContainer}>
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
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 5, marginRight: "auto" }}
              >
                <MaterialIcons
                  name="schedule"
                  size={20}
                  color={theme.primary.color}
                />
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

            {/* <CalendarProvider date={getDate()}>
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
                <TimelineList
                  events={eventsByDate}
                  // timelineProps={this.timelineProps}
                  showNowIndicator
                  // scrollToNow
                  scrollToFirst
                  initialTime={{hour: 9, minutes: 0}}
                />
            </CalendarProvider> */}

            {/* <Calendar
                minDate={"2024-01-01"}
                onDayPress={(day) => {
                  console.log("selected day", day);
                }}
                enableSwipeMonths={true}
                markedDates={markedDates}
                disableAllTouchEventsForDisabledDays
              /> */}

            {/* <Calendar
          enableSwipeMonths
          current={INITIAL_DATE}
          onDayPress={onDayPress}
          markedDates={marked}
        /> */}

            <Calendar
              theme={{
                todayTextColor: theme.primary.color,
                arrowColor: theme.primary.color,
              }}
              enableSwipeMonths
              current={INITIAL_DATE}
              onDayPress={onDayPress}
              markedDates={{ ...unAvailableDates, ...selectedDay }}
            />
          </View>

          <View style={{
                paddingTop: 10,
                marginBottom: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <View style={{display:"flex", gap: 3, marginBottom: 5}}>
                <Text style={{fontWeight: "500", fontSize: 14}}>Pick a time</Text>
                <Text style={{fontSize: 14, color: theme.gray.light3}}>5 available slots</Text>
              </View>
              <View style={{display: "flex", gap: 10}}>
                {/* <View style={{
                  backgroundColor: theme.primary.lightColor,
                  paddingTop: 11,
                  paddingBottom: 11,
                  borderRadius: 5
                }}>
                  <Text style={{textAlign: "center", color: theme.primary.color, fontWeight: "500"}}>
                    8:00 AM
                  </Text>
                </View> */}

                {
                  timeList.map((value, i) => (
                    <View key={i} style={{
                      backgroundColor: theme.primary.lightColor,
                      paddingTop: 11,
                      paddingBottom: 11,
                      borderRadius: 5
                    }}>
                      <Text style={{ textAlign: "center", color: theme.primary.color, fontWeight: "500" }}>
                        {value}
                      </Text>
                    </View>
                  ))
                }
                <View style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10
                }}>
                  <Text style={{ borderColor: theme.primary.lightColor, borderWidth: 1, textAlign: "center", fontWeight: "500", paddingTop: 10,
                  paddingBottom: 10, flexGrow: 4, borderRadius: 5}}>
                    9:00 AM
                  </Text>
                  <Text style={{ borderColor: theme.gray.light1, borderWidth: 1, textAlign: "center", fontWeight: "500", paddingTop: 10,
                  paddingBottom: 10, flexGrow: 1, borderRadius: 5}} >
                    Cancel
                  </Text>
                  <Text style={{ backgroundColor: theme.primary.color, color: theme.white.color, textAlign: "center", fontWeight: "500", paddingTop: 10,
                  paddingBottom: 10, flexGrow: 1, borderRadius: 5}} >
                    Confirm
                  </Text>
                </View>
            
              </View>
            </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServiceCheckout;
