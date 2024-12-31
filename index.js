/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const AppWithNavigation = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => AppWithNavigation);
