import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigationRoute from './src/NavigationSetUp';

function App() {
  return (
    <NavigationContainer>
      <MainNavigationRoute />
    </NavigationContainer>
  );
}

export default App;
