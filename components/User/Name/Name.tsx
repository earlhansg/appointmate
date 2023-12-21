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
    console.log("activeInputs", activeInputs);
  }

  const handleFocus = (label: string) => {
    const upDateKeys = Object.fromEntries(Object.keys(data).map(key => [key, key === label]));
    setActiveInputs(upDateKeys);
  }


  return (
    <SafeAreaView style={NameStyle.container}>
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
      <Text style={{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,

      }}>This is how we'll address you</Text>
      <View style={NameStyle.contentContainer}>
        {/* <Text>This is how we'll address you</Text> */}
        <View>
          <Text style={[{
            color: activeInputs['firstName'] ? theme.black.dark : theme.gray.light3
          }, NameStyle.labelInput]}>First name</Text>
          <TextInput
            style={[{borderColor: activeInputs['firstName'] ? theme.black.dark : theme.gray.light3}, NameStyle.input]}
            onChangeText={(value) => handleChange(value, "firstName")}
            onFocus={() => handleFocus("firstName")}
            value={data.firstName}  
          />
        </View>

        <View>
          <Text style={[{
            color: activeInputs['lastName'] ? theme.black.dark : theme.gray.light3
          }, NameStyle.labelInput ]}>Last name</Text>
          <TextInput
            style={[{borderColor: activeInputs['lastName'] ? theme.black.dark : theme.gray.light3}, NameStyle.input]}
            onChangeText={(value) => handleChange(value, "lastName")}
            onFocus={() => handleFocus("lastName")}
            value={data.lastName}
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Name
