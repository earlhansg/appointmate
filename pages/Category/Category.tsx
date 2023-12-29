import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from "react-native";
import { CategoryData, Navigation } from '../model/Navigation';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';
import { useRoute, RouteProp } from "@react-navigation/native";
import { CategoryStyle } from './CategoryStyle';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CategoryRouteProps = {
  route: RouteProp<
    {
      Category: CategoryData
    },
    "Category"
  >;
};

const Category = ({navigation}: Navigation) => {
  const theme = useContext(ThemeContext);
  const route = useRoute<CategoryRouteProps["route"]>();
  const { id, name } = route.params || { data: {} };

  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };
  return (
    <SafeAreaView style={CategoryStyle.container}>
      <View style={CategoryStyle.headerContainer}>
        <View style={CategoryStyle.headerIconContainer}>
          <ButtonIcon
            renderIcon={(settings) => (
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.primary.color}
                size={20}
              />
            )}
            onClick={handleClickMenuBar}
          />
        </View>
        <Text style={CategoryStyle.headerText}>{name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Category
