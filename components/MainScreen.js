import * as React from 'react';
import { Button, View, Text, useState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function MainScreen({ navigation }) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
      Welcome to my app
      </Text>
      <Button
  onPress={() => {
    alert('More components will be added');
  }}
  title="Press here for more"
/>
      <Button
        title="Go to artists"
        onPress={() => navigation.navigate('Artists')}
      />
    </View>
  );
}

export default MainScreen;