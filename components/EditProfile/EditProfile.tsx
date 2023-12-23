import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { EditProfileStyle } from './EditProfileStyle';
import { theme } from '../ThemeContext/theme';
import Input from './Input/Input';

type EditProfileProps = {
  data: {
    firstName?: string;
    lastName?: string;
  };
  header?: string
};

const EditProfile: React.FC<EditProfileProps> = ({ data, header }) => {
  return (
    <>
      {header != null && (
          <Text
              style={EditProfileStyle.headerText}
          >
              {header}
          </Text>
      )}
      <View style={EditProfileStyle.contentContainer}>
        <>
          {Object.keys(data).map((key, i) => (
            <View key={key} style={{ marginBottom: i === Object.keys(data).length - 1 ? "auto" : 0 }}>
              <Input label={key} passData={data}/>
            </View>
          ))}
          <Pressable style={[{
            backgroundColor: theme.primary.color,
            
          }, EditProfileStyle.buttonContainer]}>
            <Text style={[{color: theme.white.color}, EditProfileStyle.buttonText]}>Save</Text>
          </Pressable>
        </>
      </View>
    </>
  );
};

export default EditProfile;
