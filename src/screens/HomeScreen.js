import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Button
      onPress={() => navigation.navigate('componentScreen')}
      title="Go to Components Screen" />

    <Button
      onPress={() => navigation.navigate('listScreenComponent')}
      title="Go to List Demo" />

    <Button
      onPress={() => navigation.navigate('imageScreen')}
      title="Go to Image Screen" />

    <Button
      onPress={() => navigation.navigate('counterScreen')}
      title="Go to Counter Screen" />
      
      <Button
      onPress={() => navigation.navigate('colorScreen')}
      title="Go to Color Screen" />
      <Button
      onPress={() => navigation.navigate('squareScreen')}
      title="Go to Square Screen" />
      <Button
      onPress={() => navigation.navigate('textInputScreen')}
      title="Go to Text Input Screen" />
      <Button
      onPress={() => navigation.navigate('boxScreen')}
      title="Go to BoxScreen Screen" />
  </View>
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems:'center',
    justifyContent:'space-between'
},
  text: {
    fontSize: 16,
    margin: 16
  },
  button: {
    margin: 16
  }
});

export default HomeScreen;


