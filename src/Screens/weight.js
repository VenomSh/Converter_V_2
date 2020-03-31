import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import IconWeight from '../Icons/weight.png';
import IconLength from '../Icons/lengthD.png';
import IconBmi from '../Icons/bmiD.png';
import IconVolume from '../Icons/volumeD.png';
import IconArea from '../Icons/areaD.png';

import {useNavigation} from '@react-navigation/native';

function ScreenWeight() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 0.95, backgroundColor: 'black'}} />
      <View
        style={{
          flex: 0.115,
          marginBottom: '0%',
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            'rgb(237,196,82)',
            'rgb(237,196,82)',
            'rgb(237,196,82)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
          ]}
          style={{flex: 1, borderTopLeftRadius: 11, borderTopRightRadius: 11, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WeightScreen')}
            style={{flex: 0.2, borderTopLeftRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IconWeight} style={{width: '37%', height: '40%'}}  />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LengthScreen')}
            style={{flex: 0.2, borderTopLeftRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IconLength} style={{width: '37%', height: '40%'}}  />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BmiScreen')}
            style={{flex: 0.2, borderTopLeftRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IconBmi} style={{width: '37%', height: '40%'}}  />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('VolumeScreen')}
            style={{flex: 0.2, borderTopLeftRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IconVolume} style={{width: '37%', height: '40%'}}  />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AreaScreen')}
            style={{flex: 0.2, borderTopLeftRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IconArea} style={{width: '37%', height: '40%'}}  />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

export default ScreenWeight;
