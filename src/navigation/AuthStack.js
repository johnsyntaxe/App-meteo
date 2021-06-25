import React from 'react';
import Home from '../srceens/Home.js';
import {createStackNavigator} from '@react-navigation/stack';

const settings = {
  headerMode: 'none',
  screenOptions: {
    animationEnabled: true,
    animationTypeForReplace: 'pop',
  },
};

let user_screen_not_connected = [{name: 'Home', screen: Home}];
const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator initialRouteName="Home" {...settings}>
    {user_screen_not_connected.map((element, i) => (
      <Stack.Screen key={i} name={element.name} component={element.screen} />
    ))}
  </Stack.Navigator>
);
