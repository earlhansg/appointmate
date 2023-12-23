import React, { ReactElement, useContext, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { EditProfileStyle } from './EditProfileStyle';
import { ThemeContext } from '../ThemeContext/ThemeContext';

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
      <View>
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
      </View>
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
          {Object.keys(data).map((key) => (
            <YourComponent key={key} label={key} passData={data} />
          ))}
        </>
      </View>
    </>
  );
};

export default EditProfile;
