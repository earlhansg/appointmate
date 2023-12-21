import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from "react-native";
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

  const dataKeys = Object.fromEntries(Object.keys(data).map(key => [key, false]));
  
  const [activeInputs, setActiveInputs] = React.useState(dataKeys);



  const theme = useContext(ThemeContext);

  const handleClickMenuBar = () => {
    console.log("open drawer");
    // navigation?.navigate("Home")
  };

  const handleChange = (value: any, label: string) => {
    setData((prev) => ({...prev, [label]: value}))
    const upDateKeys = Object.fromEntries(Object.keys(data).map(key => [key, key === label]));
    setActiveInputs(upDateKeys);
    console.log("activeInputs", activeInputs);
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
      <View style={{
          marginTop: 15,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
        }}>
        <Text>This is how we'll address you</Text>
        <View>
          <Text style={{
            position: "absolute",
            top: 9,
            left: 15,
            backgroundColor: "#ffffff",
            zIndex: 200,
            paddingLeft: 3,
            paddingRight: 3,
            fontSize: 13,
            color: theme.gray.light3
          }}>First name</Text>
          <TextInput
            style={[{borderColor: activeInputs['firstName'] ? "red" : theme.gray.light3}, NameStyle.input]}
            onChangeText={(value) => handleChange(value, "firstName")}
            value={data.firstName}
            
          />

          {/* <TextInput
            style={[{borderColor: theme.gray.light3}, NameStyle.input]}
            onChangeText={(value) => handleChange(value, "firstName")}
            value={data.firstName}
            
          /> */}
        </View>

        <View>
          <Text style={{
            position: "absolute",
            top: 9,
            left: 15,
            backgroundColor: "#ffffff",
            zIndex: 200,
            paddingLeft: 3,
            paddingRight: 3,
            fontSize: 13,
            color: theme.gray.light3
          }}>Last name</Text>
          <TextInput
            style={[{borderColor: activeInputs['lastName'] ? "red" : theme.gray.light3}, NameStyle.input]}
            onChangeText={(value) => handleChange(value, "lastName")}
            value={data.lastName}

          />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Name
