import React from 'react';
import {AuthStack} from './src/navigation/AuthStack.js';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/RootNavigation.js';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack/>
    </NavigationContainer>
  );
};

export default App;
