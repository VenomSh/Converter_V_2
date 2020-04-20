import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

import IconWeight from '../Icons/weightD.png';
import IconLength from '../Icons/lengthD.png';
import IconBmi from '../Icons/bmiD.png';
import IconVolume from '../Icons/volumeD.png';
import IconArea from '../Icons/area.png';
import Circle from '../Image/circle.png';
import Input from '../Image/input.png';

function ScreenArea() {
  const navigation = useNavigation();

  var FromId = useState(-1);
  var fromId = FromId[0];
  var setFromId = FromId[1];
  var FromData = useState(0);
  var fromData = FromData[0];
  var setFromData = FromData[1];
  var FromSubData = useState(0);
  var fromSubData = FromSubData[0];
  var setFromSubData = FromSubData[1];

  var ToId = useState(-1);
  var toId = ToId[0];
  var setToId = ToId[1];
  var ToData = useState(0);
  var toData = ToData[0];
  var setToData = ToData[1];
  var ToSubData = useState(0);
  var toSubData = ToSubData[0];
  var setToSubData = ToSubData[1];

   var InputS = useState('Area');
   var inputValue = InputS[0];
   var setInput = InputS[1];

   var Answer = useState(0);
   var answerValue = Answer[0];
   var setAnswer = Answer[1];

   var Result = useState(0);
   var resultValue = Result[0];
   var setResult = Result[1];

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
         <FindingResalt
              IdTo={toId}
              ToData={toData}
              ToSubData={toSubData}
              IdFrom={fromId}
              FromData={fromData}
              FromSubData={fromSubData}
              updateAnswer={() => setAnswer}
              finalAnswer={answerValue}
            />
        </ImageBackground>
        </View>
        </View>
        {
          // Section that choose From and too
        }
        <View style={{flex: 0.275, flexDirection: 'row'}}>
        {
          // From
        }
        <View style={{flex: 1,width: '50%', alignItems: 'flex-end', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, width: '100%', marginBottom: '-14%', marginTop: '14%', marginRight: '-19%'}}
        onPress={() =>
            navigation.navigate('UnitDic', {name: 'AreaScreen', type: 'From'})
          }>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1.5, y: 2}} colors={['#5dcbd3','#1e5081']} style={{flex: 0.55, width: '80%', borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
        <TextFrom
              upDateIdFrom={setFromId}
              upDateFromData={setFromData}
              upDateFromSubData={setFromSubData}
            />
        </LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={{flex: 1,width: '50%'}}>
        {
          // To
        }
        <TouchableOpacity style={{flex: 1, width: '100%', marginBottom: '-14%', marginTop: '14%', marginLeft: '2%'}}
        onPress={() =>
            navigation.navigate('UnitDic', {name: 'AreaScreen', type: 'To'})
          }>
        <LinearGradient start={{x: -1, y: -2}} end={{x: 1, y: 1}} colors={['#5dcbd3','#1e5081']} style={{flex: 0.55, width: '80%', borderTopRightRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
        <TextTo
              upDateIdTo={setToId}
              upDateToData={setToData}
              upDateToSubData={setToSubData}
            />
        </LinearGradient>
        </TouchableOpacity>
        </View>
        </View>
        {
          // input Scetion
        }
        <View style={{flex: 0.374, justifyContent: 'flex-start'}}>
        <View style={{flex: 0.35, marginTop: '-5%'}}>
        <ImageBackground style={{height: '110%', alignItems: 'center', justifyContent: 'center'}} source={Input}>
        <TextInput
              style={{width: '80%', color: '#30789D', fontSize: 20, marginTop: '3%'}}
              allowFontScaling={false}
              numberOfLines={1}
              editable={fromId === -1 || toId === -1 ? false : true}
              keyboardType="decimal-pad"
              onFocus={() => {
                if (inputValue === 'Area') {
                  setInput('');
                }
              }}
              onChangeText={event => {
                setInput(event);
                setAnswer(0);
                if (inputValue !== 'Weight') {
                  setAnswer(event);
                }
              }}
              value={inputValue}
            />
        </ImageBackground>
        </View>
        </View>
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
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            'rgb(36,53,81)',
            '#5dcbd3',
            '#5dcbd3',
            '#5dcbd3',
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

function TextFrom(props) {
  const route = useRoute();
  if (route.params?.nameF) {
    props.upDateIdFrom(route.params.idF);
    props.upDateFromData(route.params.dataF);
    props.upDateFromSubData(route.params.subDataF);
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
        {' '}
        From :{route.params.nameF}
      </Text>
    );
  } else {
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
        {' '}
        FROM{' '}
      </Text>
    );
  }
}

function TextTo(props) {
  const route = useRoute();
  if (route.params?.name) {
    props.upDateIdTo(route.params.id);
    props.upDateToData(route.params.data);
    props.upDateToSubData(route.params.subData);
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
        {' '}
        To :{route.params.name}
      </Text>
    );
  } else {
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
        {' '}
        To{' '}
      </Text>
    );
  }
}

function FindingResalt(props) {
  if (props.finalAnswer !== 0) {
    if (props.IdFrom === 1) {
      if (props.IdTo === 1) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 15, color: 'rgb(22,34,48)', width: '67%'}}>
            {' '}
            {(props.finalAnswer * props.ToData * props.ToSubData) /
              (props.FromData * props.FromSubData)}
          </Text>
        );
      } else if (props.IdTo === 2) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 20, color: 'rgb(22,34,48)', width: '67%', textAlign: 'center'}}>
            {' '}
            {(props.finalAnswer *
              props.ToData *
              Math.pow(10, props.ToSubData)) /
              (props.FromData * props.FromSubData)}
          </Text>
        );
      }
    } else if (props.IdFrom === 2) {
      if (props.IdTo === 1) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 20, color: 'rgb(22,34,48)', width: '67%', textAlign: 'center'}}>
            {' '}
            {(props.finalAnswer * props.ToData * props.ToSubData) /
              (props.FromData * Math.pow(10, props.FromSubData))}
          </Text>
        );
      } else if (props.IdTo === 2) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 20, color: 'rgb(22,34,48)', width: '67%', textAlign: 'center'}}>
            {' '}
            {(props.finalAnswer *
              props.ToData *
              Math.pow(10, props.ToSubData)) /
              (props.FromData * Math.pow(10, props.FromSubData))}{' '}
          </Text>
        );
      }
    }
  } else
    return (
      <Text
        allowFontScaling={false}
        numberOfLines={1}
        style={{fontSize: 15, color: 'rgb(22,34,48)', width: '67%', textAlign: 'center'}}>
        {' '}
         choose your unit{' '}
      </Text>
    );
}

export default ScreenArea;
