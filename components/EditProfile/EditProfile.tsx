import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { EditProfileStyle } from './EditProfileStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ThemeContext } from '../ThemeContext/ThemeContext';
import ButtonIcon from '../Buttons/ButtonIcon';

type EditProfileProps = {
  data: {
    firstName?: string;
    lastName?: string;
  }
}

const EditProfile = (props: EditProfileProps) => {
  // const [currentData, setcurrentData] = React.useState({
  //   firstName: "Earl Hans",
  //   lastName: "Genoso"
  // });

  const [currentData, setcurrentData] = React.useState(props.data);

  const dataKeys = Object.fromEntries(Object.keys(props.data).map(key => [key, false]));
  
  const [activeInputs, setActiveInputs] = React.useState(dataKeys);



  const theme = useContext(ThemeContext);

  const handleClickMenuBar = () => {
    console.log("open drawer");
    // navigation?.navigate("Home")
  };

  const handleChange = (value: any, label: string) => {
    setcurrentData((prev) => ({...prev, [label]: value}))
    console.log("activeInputs", activeInputs);
  }

  const handleFocus = (label: string) => {
    const upDateKeys = Object.fromEntries(Object.keys(data).map(key => [key, key === label]));
    setActiveInputs(upDateKeys);
  }


  return (
    // <SafeAreaView style={EditProfileStyle.container}>
    //   <View style={EditProfileStyle.headerContainer}>
    //     <View style={EditProfileStyle.headerIconContainer}>
    //       <ButtonIcon
    //         renderIcon={(settings) => (
    //           <MaterialCommunityIcons 
    //             name="arrow-left"
    //             color={theme.primary.color}
    //             size={settings.isClicked ? 17 : 20}
    //           />
    //         )}
    //         onClick={handleClickMenuBar}
    //       />
    //     </View>
    //     <Text style={EditProfileStyle.headerText}>Name</Text>
    //   </View>
    //   <Text style={{
    //     marginTop: 10,
    //     marginLeft: 10,
    //     marginRight: 10,
    //     fontSize: 13,

    //   }}>This is how we'll address you</Text>
    //   <View style={EditProfileStyle.contentContainer}>
    //     <View>
    //       <Text style={[{
    //         color: activeInputs['firstName'] ? theme.black.dark : theme.gray.light3
    //       }, EditProfileStyle.labelInput]}>First name</Text>
    //       <TextInput
    //         style={[{borderColor: activeInputs['firstName'] ? theme.black.dark : theme.gray.light3}, EditProfileStyle.input]}
    //         onChangeText={(value) => handleChange(value, "firstName")}
    //         onFocus={() => handleFocus("firstName")}
    //         value={data.firstName}  
    //       />
    //     </View>

    //     <View>
    //       <Text style={[{
    //         color: activeInputs['lastName'] ? theme.black.dark : theme.gray.light3
    //       }, EditProfileStyle.labelInput ]}>Last name</Text>
    //       <TextInput
    //         style={[{borderColor: activeInputs['lastName'] ? theme.black.dark : theme.gray.light3}, EditProfileStyle.input]}
    //         onChangeText={(value) => handleChange(value, "lastName")}
    //         onFocus={() => handleFocus("lastName")}
    //         value={data.lastName}
    //       />
    //     </View>

    //   </View>
    // </SafeAreaView>
    <></>
  )
}

export default EditProfile