import React, { useContext } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import ButtonIcon from '../../Buttons/ButtonIcon';
import { NameStyle } from './NameStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ThemeContext } from '../../ThemeContext/ThemeContext';


const Name = () => {
  const [data, setData] = React.useState({
    firstName: "Earl Hans",
    lastName: "Genoso"
  });

  const theme = useContext(ThemeContext);

  const handleClickMenuBar = () => {
    console.log("open drawer");
    // navigation?.navigate("Home")
  };

  const handleChange = (value: any, label: any) => {
    console.log("handleChange", value)
    setData((prev) => ({...prev, [label]: value}))
  }
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: "#ffffff"}}>
      <View style={NameStyle.headerContainer}>
        <View style={NameStyle.headerIconContainer}>
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
        <Text style={NameStyle.headerText}>Name</Text>
      </View>
      <View>
        <View>
          <TextInput
            style={NameStyle.input}
            onChangeText={(value) => handleChange(value, "firstName")}
            value={data.firstName}
            
          />
          <TextInput
            style={NameStyle.input}
            onChangeText={(value) => handleChange(value, "lastName")}
            value={data.lastName}

          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Name
