import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome5, Entypo, Ionicons, MaterialIcons  } from "@expo/vector-icons";
import { CustomDrawerContentStyle } from "./CustomDrawerContentStyle";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
const insets = useSafeAreaInsets();
const theme = useContext(ThemeContext);
  return (
    <DrawerContentScrollView contentContainerStyle={CustomDrawerContentStyle.DrawerContentScrollView} {...props}>
        {/* <DrawerItemList {...props} /> */}
        <View style={CustomDrawerContentStyle.container}>
          <View style={[CustomDrawerContentStyle.firstSectionContainer, {backgroundColor: theme.primary.color}]}>
            <View style={CustomDrawerContentStyle.firstSection}>
              <View style={CustomDrawerContentStyle.firstSectionContainer1}>
                <View style={CustomDrawerContentStyle.firstSectionContainer1ContentContainer}>
                  <View>
                    <Text style={CustomDrawerContentStyle.firstSectionContainer1Content}>E</Text>
                  </View>
                </View>
              </View>
              {/* end of firstSectionContainer1 */}
              <View style={CustomDrawerContentStyle.firstSectionContainer2}>
                <Text style={CustomDrawerContentStyle.firstSectionContainer2Content}>Earl Hans Genoso</Text>
              </View>
              {/* end of firstSectionContainer2 */}
            </View>
          </View>
          {/* end of firstSectionContainer */}
          <View style={[CustomDrawerContentStyle.secondSectionContainer, { borderColor: theme.gray.light }]}>
            <DrawerItemList {...props}/>
          </View>
          <DrawerItem
            label="Settings"
            onPress={() => () => alert('Link to help')}
            style={{marginLeft: 0, marginRight: 0, marginTop: 0}}
            labelStyle={{marginLeft: 2, color:"black", fontSize: 13, fontWeight: "400"}}
        />
        <DrawerItem
            label="Terms & Conditions / Privacy"
            onPress={() => () => alert('Link to help')}
            style={{marginLeft: 0, marginRight: 0, marginTop: 0}}
            labelStyle={{marginLeft: 2, color:"black", fontSize: 13, fontWeight: "400"}}
        />
        <DrawerItem
            label="Log out"
            onPress={() => () => alert('Link to help')}
            style={{marginLeft: 0, marginRight: 0, marginTop: 0}}
            labelStyle={{marginLeft: 2, color:"black", fontSize: 13, fontWeight: "400"}}
        />
        </View>
      </DrawerContentScrollView>
  )
}

export default CustomDrawerContent
