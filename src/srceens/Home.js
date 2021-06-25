import Style from './Style.js';
import Request from '../api/Request.js';
import Loading from '../component/Loading';
import getDates from '../functions/getDate.js';
import React, {useEffect, useState} from 'react';
import checkField from '../functions/checkField.js';
import NetInfo from "@react-native-community/netinfo";
import getLocation from '../functions/getLocation.js';
import SearchBarComponent from '../component/SearchBar.js';
import FastDetailsComponent from '../component/FastDetails';
import OtherDetailsComponent from '../component/OtherDetails';
import {StatusBar, ImageBackground, SafeAreaView} from 'react-native';
import {
  ROUTE,
  API_KEY,
  FAIL_ERROR,
  CITY_NOT_FOUND_END,
  CITY_NOT_FOUND_START,
  ROUTE_PREVENT,
} from '../helper/config.js';

const backgroundImage = '../../assets/night2.jpg';

const Home = () => {
  /*declaring and initialising variables*/
  const [text, setText] = useState('');
  const [city, setCity] = useState('');
  const [sunset, setSunset] = useState('');
  const [contry, setContry] = useState('');
  const [windDeg, setWindDeg] = useState(0);
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [latitude, setLatitude] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [longitude, setLongitude] = useState('');
  const [isloading, setIsloading] = useState(true);
  const [endAssignment, setEndAssignment] = useState(false);
  const [icon, setIcon] = useState('');

  /*Update of the component in function according to the value of the loader*/
  useEffect(() => {
    setIsloading(false);
    setEndAssignment(false);
  }, [endAssignment]);
  /*Calling the api, reading the data and updating the state of the component*/
  const fetch_weather = async () => {
    if (checkField(text)) {
      setIsloading(true);
      /* get weather data by city*/
      let response = await Request.location(ROUTE, API_KEY, text);
      if (response.message) {
        /*city not found*/
        alert(`${CITY_NOT_FOUND_START}${text}${CITY_NOT_FOUND_END}`);
        setEndAssignment(true);
      } else {
        /*get the date of the sunrise and sunset on the US format*/
        let sunriseDate = getDates(response.sys.sunrise * 1000);
        let sunseDate = getDates(response.sys.sunset * 1000);

        /*Get the weather forecast in days */
        /*      let locationVariable = await getLocation();
        if (locationVariable) {
          let responseCurrent = await Request.forecast(ROUTE_PREVENT, API_KEY, locationVariable);
        }*/
        /*Assignment of temperature, sun, wind and humidity variables*/
        setSunset(sunseDate);
        setCity(response.name);
        setSunrise(sunriseDate);
        setWindDeg(response.wind.deg);
        setContry(response.sys.country);
        setLatitude(response.coord.lat);
        setLongitude(response.coord.lon);
        setWindSpeed(response.wind.speed);
        setHumidity(response.main.humidity);
        //setIcon(response.weather[0]['icon']);
        setTempMax(response.main.temp_max.toFixed(2));
        setTempMin(response.main.temp_min.toFixed(2));
        setEndAssignment(true);
      }
    } else {
      alert(FAIL_ERROR);
    }
  };
  return (
    <SafeAreaView style={Style.container}>
      <StatusBar translucent={true} backgroundColor="#000" />
      <ImageBackground
        source={require(backgroundImage)}
        style={Style.Image_Background_Style}>
        {/*Start -- Search bar*/}
        <SearchBarComponent
          fetch_weather={() => fetch_weather()}
          onChangeTexts={text => setText(text)}
        />
        {/*End -- Search bar*/}
        {/*Start -- Weather Holder View  1*/}
        {isloading ? (
          <Loading />
        ) : (
          <>
            <FastDetailsComponent
              city={city}
              icon={icon}
              windDeg={windDeg}
              windSpeed={windSpeed}
              humidity={humidity}
            />
            {/*End -- Weather Holder View */}

            {/*Start -- Detauls Block*/}
            <OtherDetailsComponent
              tempMin={tempMin}
              tempMax={tempMax}
              sunrise={sunrise}
              sunset={sunset}
              contry={contry}
              latitude={latitude}
              longitude={longitude}
            />
            {/*End -- Detauls Block*/}
          </>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Home;
