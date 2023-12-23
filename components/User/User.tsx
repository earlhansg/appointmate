import React, { useContext } from "react";
import { View, Text } from "react-native";
import InfoList from "./InfoList/InfoList";
import { UserStyle } from "./UserStyle";
import { TouchableHighlight } from "react-native-gesture-handler";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import { Navigation } from "../../pages/model/Navigation";

const User = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);

  const user = {
    firstName: "Earl Hans",
    lastName: "Genoso",
    email: "earl@test.com",
    mobileNumber: "091234567890",
  };

  return (
    <>
      <TouchableHighlight
        style={UserStyle.container}
        underlayColor={theme.gray.light2}
        onPress={() =>
          navigation?.navigate("Update", {
            label: "Name",
            data: { firstName: user["firstName"], lastName: user["lastName"] },
            header: "This is how we'll address you",
          })
        }
      >
        <InfoList
          label="Name"
          value={`${user.firstName} ${user.lastName}`}
          editable={true}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={UserStyle.container}
        underlayColor={theme.gray.light2}
        onPress={() =>
          navigation?.navigate("Update", {
            label: "Email",
            data: { email: user["email"] },
            header: "Make sure we can reach you at your new email"
          })
        }
      >
        <InfoList label="Email" value={user.email} editable={true}>
          <View
            style={[
              {
                backgroundColor: theme.gray.light1,
              },
              UserStyle.verifiedContainer,
            ]}
          >
            <Text
              style={[{ color: theme.black.light1 }, UserStyle.verifiedText]}
            >
              Verified
            </Text>
          </View>
        </InfoList>
      </TouchableHighlight>
      <TouchableHighlight
        style={UserStyle.container}
        underlayColor={theme.gray.light2}
        // onPress={() => navigation?.navigate("Update")}
        onPress={() =>
          navigation?.navigate("Update", {
            label: "Mobile number",
            data: { mobileNumber: user["mobileNumber"] },
            header: "If you decide to switch to a different number, we will guide you through a verification process during your next checkout."
          })
        }
      >
        <InfoList
          label="Mobile number"
          value={user.mobileNumber}
          editable={true}
        >
          <View
            style={[
              {
                backgroundColor: theme.gray.light1,
              },
              UserStyle.verifiedContainer,
            ]}
          >
            <Text
              style={[{ color: theme.black.light1 }, UserStyle.verifiedText]}
            >
              Verified
            </Text>
          </View>
        </InfoList>
      </TouchableHighlight>
      <>
        <Text style={UserStyle.connectedAccountText}>Connected Account</Text>
        <View style={UserStyle.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="google"
              size={24}
              color={theme.gmailIconColor.primary}
              style={UserStyle.connectedIcon}
            />
            <InfoList label="Google" value={"Connected"}></InfoList>
          </View>
        </View>
      </>
    </>
  );
};

export default User;
