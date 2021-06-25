import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator size={70} color="#fff" />
    </View>
  );
};
export default Loading;

const style = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    elevation: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
