import React from 'react';

import HomePage from './src/pages/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SalatPage from './src/pages/SalatPage';
import SurahsPage from './src/pages/SurahsPage';
import PrayerTimesPage from './src/pages/PrayerTimesPage';
import PillarsOfIslamPage from './src/pages/PillarsOfIslamPage';
import DhikrPage from './src/pages/DhikirPage';
// Every new Screen you have to add here, this name and the name on Stack.SCreen line up
export type RootStackParams = {
  Home: undefined;
  Salat: undefined;
  Surahs: undefined;
  PrayerTimes: undefined;
  PillarsOfIslam: undefined;
  Dhikr: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    // Outer Most Div Start
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Salat" component={SalatPage} />
      <Stack.Screen name="Surahs" component={SurahsPage} />
      <Stack.Screen name="PrayerTimes" component={PrayerTimesPage} />
      <Stack.Screen name="PillarsOfIslam" component={PillarsOfIslamPage} />
      <Stack.Screen name="Dhikr" component={DhikrPage} />
    </Stack.Navigator>
  );
};

export default App;
