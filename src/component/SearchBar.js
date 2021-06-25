import React from 'react';
import Style from '../srceens/Style';
import {PLAHOLDER_TEXT_INPUT} from '../helper/config.js';
import {TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBarComponent = (props) => {
  return (
    <View style={Style.Search_Box_View}>
      <TextInput
        placeholder={PLAHOLDER_TEXT_INPUT}
        placeholderTextColor="#FFF"
        style={Style.Search_Box}
        onChangeText={text => props.onChangeTexts(text)}
      />
      <TouchableOpacity style={Style.button_touch} onPress={() => props.fetch_weather()}>
        <MaterialIcons name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBarComponent;
