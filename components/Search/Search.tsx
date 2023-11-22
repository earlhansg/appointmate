import React from 'react'
import { TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SearchStyle } from './SearchStyle';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={SearchStyle.container}>
        <View style={SearchStyle.searchContainer}>
            <AntDesign style={SearchStyle.searchIcon} name="search1" size={24} color="black" />
            <TextInput
                style={SearchStyle.input}
                placeholder="Find Services"
                underlineColorAndroid="transparent"
            />
        </View>
        <View style={SearchStyle.filterContainer}>
            <Ionicons name="filter-outline" size={24} color="black" />
        </View>
    </View>
  )
}

export default Search
