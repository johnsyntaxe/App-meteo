import React from 'react';
import Style from './Style.js';
import {ROUTE_ICON} from '../helper/config';
import {Image, Text, View} from 'react-native';

const FastDetailsComponent = (props) => {
  let urlIcon = ROUTE_ICON + props.icon + '@2x.pn';
  return (
    <View style={Style.Weather_Box_Main}>
      <View style={Style.Weather_Holder_View}>
        <View style={{height:'30%', justifyContent:'center' , alignItems:'center', width:'100%'}}>
          <Text style={Style.Main_Weather_Title}>Ville de {props.city}</Text>
        </View>
        <View style={Style.Weather_Details_and_Image}>
          <Image
            tintColor="#FFF"
            source={{uri: urlIcon}}
            style={Style.Weather_Image}
          />
          <View style={{flexDirection: 'row'}}>
            {/*Bloc title*/}
            <View>
              <Text style={Style.text}>Humidité:</Text>
              <Text style={Style.text}>Vitesse du vent:</Text>
              <Text style={Style.text}>Direction du vent:</Text>
            </View>
            {/*Bolc value*/}
            <View>
              <Text style={Style.value}>{props.humidity} °C</Text>
              <Text style={Style.value}>{props.windSpeed} m/s</Text>
              <Text style={Style.value}>{props.windDeg} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default FastDetailsComponent;
