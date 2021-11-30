import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from './components/detailedScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import ArtistsScreen from './components/ArtistsScreen';
import AppContext from './components/AppContext';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  const [setting1value, setSetting1value] = useState('initialValue1');
  const [setting2value, setSetting2value] = useState(false);
  const toggleSetting2 = () => {
    setting3 ? setSetting2(true) : setSetting2value(false);
  };
  const userSettings = {
    setting1name: setting1value,
    setting2name: setting2value,
    setSetting1value,
    toggleSetting2,
  };
  return (
    <AppContext.Provider value={userSettings}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Main">
          {() => (
            <MainStack.Navigator>
              <MainStack.Screen
                name="Main"
                component={MainScreen}
              />
              <MainStack.Screen name="Artists" component={ArtistsScreen} />
            </MainStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Profile" component={ProfileScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
