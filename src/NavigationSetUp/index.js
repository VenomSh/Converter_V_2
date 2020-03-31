/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator,TransitionSpecs,HeaderStyleInterpolators} from '@react-navigation/stack';
import WeightScreen from '../Screens/weight';
import LengthScreen from '../Screens/length';
import AreaScreen from '../Screens/area';
import VolumeScreen from '../Screens/volume';
import BmiScreen from '../Screens/bmi';
import UnitDic from '../Screens/UnitDic';

const Stack = createStackNavigator();

function MainNavigationRoute() {

    const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current }) => {
    return {
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
}


    return (
    <Stack.Navigator initialRouteName="bmiScreen" headerMode="none" >
      <Stack.Screen name="WeightScreen" component={WeightScreen} 
      options={{
    title: 'Custom animation',
    ...MyTransition,
  }}/>
      <Stack.Screen name="LengthScreen" component={LengthScreen}
      options={{
    title: 'Custom animation',
    ...MyTransition,
  }} />
      <Stack.Screen name="BmiScreen" component={BmiScreen}  
      options={{
    title: 'Custom animation',
    ...MyTransition,
  }}/>
      <Stack.Screen name="VolumeScreen" component={VolumeScreen} 
      options={{
    title: 'Custom animation',
    ...MyTransition,
  }}/>
      <Stack.Screen name="AreaScreen" component={AreaScreen} 
      options={{
    title: 'Custom animation',
    ...MyTransition,
  }}/>
      <Stack.Screen name="UnitDic" component={UnitDic} />
    </Stack.Navigator>
  );

}

export default MainNavigationRoute;
