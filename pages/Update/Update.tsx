import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { UpdateStyle } from './UpdateStyle';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Navigation } from '../model/Navigation';
import EditProfile from '../../components/EditProfile/EditProfile';
import { useRoute, RouteProp  } from '@react-navigation/native';

type UpdateScreenRouteProps = {
  route: RouteProp<{ Update: { data: { firstName?: string; lastName?: string; email?: string; mobileNumber?: string } } }, 'Update'>;
};

const Update = ({navigation} : Navigation) => {
  const theme = useContext(ThemeContext);
  const route = useRoute<UpdateScreenRouteProps['route']>();
  const { data } = route.params || { data: {} };
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Profile");
  };
  return (
    <SafeAreaView style={UpdateStyle.container}>
      <View style={UpdateStyle.headerContainer}>
        <View style={UpdateStyle.headerIconContainer}>
          <ButtonIcon
            renderIcon={(settings) => (
              <MaterialCommunityIcons 
                name="arrow-left"
                color={theme.primary.color}
                size={settings.isClicked ? 17 : 20}
              />
            )}
            onClick={handleClickMenuBar}
          />
        </View>
        <Text style={UpdateStyle.headerText}>Name</Text>
      </View>
      <>     
        <EditProfile data={data}/>
      </>
    </SafeAreaView>
  )
}

export default Update
