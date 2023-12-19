import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";

const User = () => {
const theme = useContext(ThemeContext);
  return (
    <View style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        borderColor: "#e0e0e0",
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
      }}>
        <View style={{flexDirection: "row"}}>
            <View style={{marginRight: "auto"}}>
                <Text style={{fontSize: 13, marginTop: 5}}>Name</Text>
                <Text style={{fontWeight:"500", 
                fontSize: 14, marginTop: 10, marginBottom: 5}}>Earl Hans Genoso</Text>
            </View>
            <View>
                <Octicons name="pencil" color={theme.primary.color} size={20} />
            </View>
        </View>
    </View>
  )
}

export default User
