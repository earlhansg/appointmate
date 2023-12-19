import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Feather,
  FontAwesome5,
  Entypo,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import CustomDrawerContent from "./CustomDrawerContent/CustomDrawerContent";
import Home from "../../pages/Home/Home";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { SideNavStyle } from "./SideNavStyle";
import Profile from "../../pages/Profile/Profile";

const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const SideNav = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              drawerItemStyle: {
                display: "none",
              },
            }}
          />
          <Drawer.Screen
            name="Appointments"
            component={NotificationsScreen}
            options={{
              headerShown: false,
              drawerItemStyle: [
                {
                  marginTop: 0,
                },
                SideNavStyle.drawerItemStyle,
              ],
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <FontAwesome5
                    name="calendar-check"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>Appointments</Text>
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Favorites"
            component={NotificationsScreen}
            options={{
              headerShown: false,
              drawerItemStyle: SideNavStyle.drawerItemStyle,
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <Entypo
                    name="heart-outlined"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>Favorites</Text>
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="View profile"
            component={Profile}
            options={{
              headerShown: false,
              drawerItemStyle: SideNavStyle.drawerItemStyle,
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <FontAwesome5
                    name="user"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>View profile</Text>
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Addresses"
            component={NotificationsScreen}
            options={{
              headerShown: false,
              drawerItemStyle: SideNavStyle.drawerItemStyle,
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <Feather
                    name="map-pin"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>Addresses</Text>
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Rewards"
            component={NotificationsScreen}
            options={{
              headerShown: false,
              drawerItemStyle: SideNavStyle.drawerItemStyle,
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <Ionicons
                    name="trophy-outline"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>Rewards</Text>
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Become pro"
            component={NotificationsScreen}
            options={{
              headerShown: false,
              drawerItemStyle: SideNavStyle.drawerItemStyle,
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <MaterialIcons
                    name="wallet-membership"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>Become pro</Text>
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Help center"
            component={NotificationsScreen}
            options={{
              headerShown: false,
              drawerItemStyle: [
                {
                  marginBottom: 0,
                },
                SideNavStyle.drawerItemStyle,
              ],
              drawerLabel: ({ color, focused }) => (
                <View style={SideNavStyle.drawerLabelContainer}>
                  <Feather
                    name="help-circle"
                    size={18}
                    color={theme.primary.color}
                    style={SideNavStyle.drawerLabelIcon}
                  />
                  <Text style={SideNavStyle.drawerLabelText}>Help center</Text>
                </View>
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default SideNav;
