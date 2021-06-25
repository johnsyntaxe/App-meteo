import React from 'react';
import Style from './Style';
import {ImageBackground, Text, View, ScrollView} from 'react-native';

const OtherDeatailsComponent = (props) => {
  return (
    <View style={Style.Info_Box_View}>
      <ScrollView style={Style.Info_Holder_Veiw}>
        <Text style={Style.Details_Weather_Text}>
          PLus de details
        </Text>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Code Pays</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.contry}</Text>
        </View>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Latitude</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.latitude}</Text>
        </View>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Longitude</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.longitude}</Text>
        </View>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Température min:</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.tempMin} °C</Text>
        </View>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Température max:</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.tempMax} °C</Text>
        </View>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Levée du soleil:</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.sunrise} AM</Text>
        </View>
        <View style={Style.view_Other_Details}>
          <Text style={Style.description_text}>Couché du soleil:</Text>
          <Text style={Style.description_text}> : </Text>
          <Text style={Style.description_text}>{props.sunset} PM</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default OtherDeatailsComponent;
