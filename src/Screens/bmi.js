import React from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import IconWeight from '../Icons/weightD.png';
import IconLength from '../Icons/lengthD.png';
import IconBmi from '../Icons/bmi.png';
import IconVolume from '../Icons/volumeD.png';
import IconArea from '../Icons/areaD.png';
import Circle from '../Image/circle.png';


import {useNavigation} from '@react-navigation/native';

function ScreenBmi() {
  const navigation = useNavigation();
  return (
     <LinearGradient colors={['rgb(36,53,81)','rgb(22,34,48)']} style={{flex: 1}}>
     {
    // header
  }
    <View style={{flex: 0.15, alignItems: 'center'}}>
    <View style={{flex: 1, marginTop: '5%'}}>
    <Text allowFontScaling={false} style={{fontSize: 25, color: 'white',fontWeight: 'bold', fontFamily: 'theboldfont.ttf'}}>
       CONVERTER
    </Text>
    </View>
    </View>
      <View style={{ flex: 0.85, flexDirection: 'column', backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <View style={{ flex: 0.88, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}} >
        {
            // where circle is
        }
        <View style={{flex: 0.35,  marginTop: '-8%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex:1, width: '50%', alignItems: 'center', marginLeft: '-2%'}}>
        <ImageBackground source={Circle} style={{height: '116%', width: '105%', marginTop: '-11%', justifyContent: 'center', alignItems: 'center'}} resizeMode="cover">
        <Text allowFontScaling={false} style={{fontSize: 19, width: '85%', marginRight: '-7%', color: 'rgb(22,34,48)'}} numberOfLines={1}>
        1651656515114554
        </Text>
        </ImageBackground>
        </View>
        </View>
        {
          // Section that choose From and too
        }
        </View>
        {
          // where the tab bar is
        }
         <View
        style={{
          flex: 0.115,
          marginBottom: '0%',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomRightRadius: 31,
          borderBottomLeftRadius: 31,
          alignItems: 'center',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(237,196,82)',
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
          ]}
          style={{flex: 1, borderTopLeftRadius: 16,borderBottomRightRadius: 31,borderBottomLeftRadius: 31, borderTopRightRadius: 16, flexDirection: 'row', width: '95%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WeightScreen')}
              style={{ flex: 0.2, borderTopLeftRadius: 16, borderBottomLeftRadius: 31,justifyContent: 'center', alignItems: 'center'}}>
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
              style={{ flex: 0.2, borderTopLeftRadius: 16, borderBottomRightRadius: 31, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={IconArea} style={{width: '37%', height: '40%'}}  />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
    </LinearGradient>
  );
}

export default ScreenBmi;
