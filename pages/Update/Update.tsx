import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { UpdateStyle } from "./UpdateStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";
import EditProfile from "../../components/EditProfile/EditProfile";
import { useRoute, RouteProp } from "@react-navigation/native";

type UpdateScreenRouteProps = {
  route: RouteProp<
    {
      Update: {
        label: string;
        data: {
          firstName?: string;
          lastName?: string;
          email?: string;
          mobileNumber?: string;
        };
        header: string;
      };
    },
    "Update"
  >;
};

const Update = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const route = useRoute<UpdateScreenRouteProps["route"]>();
  const { label, data, header } = route.params || { data: {} };
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Profile");
  };

  const headerContent = () => {
    if (header !== "") {
      return (
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 13,
            backgroundColor: "red"
          }}
        >
          {header}
        </Text>
      );
    }
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
        <Text style={UpdateStyle.headerText}>{label}</Text>
      </View>
      <>
        <EditProfile data={data} header={header} />
      </>
    </SafeAreaView>
  );
};

export default Update;
