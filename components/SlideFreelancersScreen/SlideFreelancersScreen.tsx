import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SlideFreelancersScreenStyle } from './SlideFreelancersScreenStyle'
import { ThemeContext } from '../ThemeContext/ThemeContext'

const SlideFreelancersScreen = () => {
  const theme = useContext(ThemeContext);
  const user1 = require("../../assets/profile-images/user1.png")
  return (
    <View style={{flex: 1}}>
        <View style={SlideFreelancersScreenStyle.sliderContainer}>
          <View style={{
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 10,
            width: "95%",
            borderRadius: 20
          }}>
            <View style={{
              flexDirection: "row",              
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 10,
            }}>
              <Image
                    source={user1}
                    resizeMode="contain"
                    style={{
                        width: "35%",
                        backgroundColor: "red",
                        maxHeight: 120,
                        borderRadius: 35,
                        marginRight: 20
                    }}
              />
              <View style={{
                justifyContent: "center",
                maxWidth: 130,
                overflow: "hidden"
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}>Charles Peprahs</Text>
                <Text style={{
                  fontSize: 13,
                  color: theme.gray.light3
                }}>@charlieP</Text>
                <Text style={{
                  fontSize: 15,
                  fontWeight: "500",
                  color: theme.black.light1,
                  marginTop: 7
                }}>Makeup Artist</Text>
              </View>
            </View>
            <View style={{
              flexDirection: "row",
              paddingBottom: 10,
              justifyContent: "center",
              gap: 15,
              marginTop: 10
            }}>
                  <View>
                    <Text style={{
                      fontSize: 15,
                      color: theme.black.light1,
                    }}>Completed</Text>
                    <Text  style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}>20</Text>
                  </View>
                  <View>
                    <Text style={{
                      fontSize: 15,
                      color: theme.black.light1,
                    }}>Ratings</Text>
                    <Text  style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}>5.0</Text>
                  </View>
                  <View>
                  <Pressable
                    style={[
                      {
                        backgroundColor: theme.primary.color,
                      },
                      {
                        alignItems: "center",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 25,
                        marginLeft: 5
                      }
                    ]}
                  >
                    <Text
                      style={[
                        { color: theme.white.color },
                      ]}
                    >
                    Appoint Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

        </View>
    </View>
  )
}

export default SlideFreelancersScreen
