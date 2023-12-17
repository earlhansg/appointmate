import { Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { CustomDrawerContentStyle } from "./CustomDrawerContentStyle";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { DrawerItems } from "../data/DrawerItems";
import WrappedDrawerItem from "../WrappedDrawerItem/WrappedDrawerItem";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const theme = useContext(ThemeContext);
  return (
    <DrawerContentScrollView
      contentContainerStyle={CustomDrawerContentStyle.DrawerContentScrollView}
      {...props}
    >
      {/* <DrawerItemList {...props} /> */}
      <View style={CustomDrawerContentStyle.container}>
        <View
          style={[
            CustomDrawerContentStyle.firstSectionContainer,
            { backgroundColor: theme.primary.color },
          ]}
        >
          <View style={CustomDrawerContentStyle.firstSection}>
            <View style={CustomDrawerContentStyle.firstSectionContainer1}>
              <View
                style={
                  CustomDrawerContentStyle.firstSectionContainer1ContentContainer
                }
              >
                <View>
                  <Text
                    style={
                      CustomDrawerContentStyle.firstSectionContainer1Content
                    }
                  >
                    E
                  </Text>
                </View>
              </View>
            </View>
            {/* end of firstSectionContainer1 */}
            <View style={CustomDrawerContentStyle.firstSectionContainer2}>
              <Text
                style={CustomDrawerContentStyle.firstSectionContainer2Content}
              >
                Earl Hans Genoso
              </Text>
            </View>
            {/* end of firstSectionContainer2 */}
          </View>
        </View>
        {/* end of firstSectionContainer */}
        <View
          style={[
            CustomDrawerContentStyle.secondSectionContainer,
            { borderColor: theme.gray.light },
          ]}
        >
          <DrawerItemList {...props} />
        </View>
        <>
          {DrawerItems.map(({ label }, i) => (
            <WrappedDrawerItem
              key={i}
              label={label}
              onPress={() => () => alert("Link to help")}
              style={CustomDrawerContentStyle.wrappedDrawerItem}
              labelStyle={CustomDrawerContentStyle.wrappedDrawerItemLabelStyle}
            />
          ))}
        </>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
