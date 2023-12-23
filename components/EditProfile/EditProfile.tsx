import React, { ReactElement, useContext, useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { EditProfileStyle } from './EditProfileStyle';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { theme } from '../ThemeContext/theme';

type EditProfileProps = {
  data: {
    firstName?: string;
    lastName?: string;
  };
  header?: string
};

enum Label {
  firstName = 'First name',
  lastName = 'Last name',
  email = 'Email',
  mobileNumber = 'Mobile number'
}

function isLabel(key: string): key is keyof typeof Label {
  console.log("isLabel", key);
  return key in Label;
}

interface YourComponentProps {
  label: string;
  passData: { [key: string]: string };
}

const YourComponent: React.FC<YourComponentProps> = ({ label, passData }) => {
  console.log("Your Component", label)
  const theme = useContext(ThemeContext);

  const [currentData, setCurrentData] = useState({[label]: passData[label]});
  const myKey: Record<string, any> = {};
  const [activeInputs, setActiveInputs] = useState({[label]: false});
  

  const handleChange = (value: string, label: string) => {
    console.log('activeInputs', activeInputs);
  };

  return isLabel(label) ? (
    <>
      {/* <View> */}
        <Text
          style={[
            {
              color: activeInputs[label] ? theme.black.dark : theme.gray.light3,
            },
            EditProfileStyle.labelInput,
          ]}
        >
          {Label[label]}
        </Text>
        <TextInput
          style={[
            {
              borderColor: activeInputs[label]
                ? theme.black.dark
                : theme.gray.light3,
            },
            EditProfileStyle.input,
          ]}
          onChangeText={(value) => handleChange(value, label)}
          onFocus={() => setActiveInputs({ [label]: !activeInputs[label] })}
          onBlur={() => setActiveInputs({ [label]: false })}
          value={currentData[label]}
        />
      {/* </View> */}
    </>
  ) : null;
};

const EditProfile: React.FC<EditProfileProps> = ({ data, header }) => {
  console.log("header", header);
  return (
    <>
      {header != null && (
          <Text
              style={{
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  fontSize: 13,
              }}
          >
              {header}
          </Text>
      )}
      <View style={EditProfileStyle.contentContainer}>
        <>
          {Object.keys(data).map((key, i) => (
            // <YourComponent key={key} label={key} passData={data}/>
            <View style={{ marginBottom: i === Object.keys(data).length - 1 ? "auto" : 0 }}>
              <YourComponent key={key} label={key} passData={data}/>
            </View>
          ))}
          <Pressable style={{
            backgroundColor: theme.primary.color,
            alignItems: "center",
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 8,
            marginBottom: 5
          }}>
            <Text style={{color: theme.white.color, fontWeight:"500", fontSize: 13}}>Save</Text>
          </Pressable>
        </>
      </View>
    </>
  );
};

export default EditProfile;
