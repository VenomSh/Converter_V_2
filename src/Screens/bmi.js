import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function bmi() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('WeightScreen')}>
      <View>
        <Text>hello babys</Text>
      </View>
    </TouchableOpacity>
  );
}

export default bmi;
