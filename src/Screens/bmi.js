import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from "react-native-text-gradient";

import IconWeight from '../Icons/weightD.png';
import IconLength from '../Icons/lengthD.png';
import IconBmi from '../Icons/bmi.png';
import IconVolume from '../Icons/volumeD.png';
import IconArea from '../Icons/areaD.png';
import Circle from '../Image/circle.png';


import {useNavigation} from '@react-navigation/native';

function ScreenBmi() {
  const navigation = useNavigation();

  var useMetric = useState(true);
  var useMetricVal = useMetric[0];
  var setUseMetric = useMetric[1];

  var heightMetre = useState('. . . . .');
  var heightMetreVal = heightMetre[0];
  var setHeightMetre = heightMetre[1];

  var heightInch = useState('. . . . .');
  var heightInchVal = heightInch[0];
  var setHeightInch = heightInch[1];

  var heightFoot = useState('. . . . .');
  var heightFootVal = heightFoot[0];
  var setHeightFoot = heightFoot[1];

  var weightKg = useState('. . . . .');
  var weightKgVal = weightKg[0];
  var setWeightKg = weightKg[1];

  var weightPound = useState('. . . . .');
  var weightPoundVal = weightPound[0];
  var setWeightPound = weightPound[1];

  var whichIsOn = useState('');
  var whichIsOnVal = whichIsOn[0];
  var setWhichIsOn = whichIsOn[1];

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
        <ResualtSection
          whichCal={useMetricVal}
          rMetre={heightMetreVal}
          rInch={heightInchVal}
          rFoot={heightFootVal}
          rKg={weightKgVal}
          rPound={weightPoundVal}
        />
        </ImageBackground>
        </View>
        </View>
        {
          // Section for choosing what unit
        }
        <View style={{flex: 0.18, justifyContent: 'center', alignItems: 'center'}} >
        <WhatUnit unit={useMetricVal} setUnit={setUseMetric} />
        </View>
        {
          // Section for inputs
        }
        <View style={{flex: 0.35, flexDirection: 'row'}}>
        {
          // Height Section
        }
        <View style={{flex: 1, width: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
        <HeightSection
          whichHeight={useMetricVal}
          metre={heightMetreVal}
          setMetre={setHeightMetre}
          inch={heightInchVal}
          setInch={setHeightInch}
          foot={heightFootVal}
          setFoot={setHeightFoot}
          thisOne={whichIsOnVal}
          setThisOne={setWhichIsOn}
        />
        </View>
         {
          // Weight Section
        }
        <View style={{flex: 1, width: '100%', alignItems: 'flex-start', justifyContent: 'center'}}>
        <WeightSection
          whichWeight={useMetricVal}
          kg={weightKgVal}
          setKg={setWeightKg}
          pound={weightPoundVal}
          setPound={setWeightPound}
          thisOne={whichIsOnVal}
          setThisOne={setWhichIsOn}
        />
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
 /* What Unit start */
function WhatUnit(props) {
  if (props.unit) {
    return(
    <View style={{flex: 0.5}}>
    <LinearTextGradient
  style={{ fontWeight: "bold", fontSize: 20 }}
  locations={[0, 1]}
  colors={['#5dcbd3','#1e5081']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
 <Text onPress={()=> props.setUnit(! props.unit)}>METRIC / KG</Text>
</LinearTextGradient>
    </View>
 ) } else {
   return(
    <View style={{flex: 0.5}}>
    <LinearTextGradient
  style={{ fontWeight: "bold", fontSize: 20 }}
  locations={[0, 1]}
  colors={['#1e5081', '#5dcbd3']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
 <Text onPress={()=> props.setUnit(! props.unit)}>FOOT & INCH / POUND</Text>
</LinearTextGradient>
    </View>
 )
 }
}

/* What Unit end */
/* Height Section Start */
function HeightSection(props) {
  if (props.whichHeight) {
    // metre
    return(
      <LinearGradient  colors={props.thisOne === 'm' ? ['#5dcbd3','#1e5081'] : ['white', 'white']} style={{flex: 0.9, flexDirection: 'column',width: '85%', marginRight: '2%', borderRadius: 17,shadowColor: '#000',shadowOffset:{ width: 0, height: 3} ,shadowOpacity: 1, shadowRadius: 4.65, elevation: 6 }}>
      <View style={{flex: 0.14}} />
      <View style={{flex: 0.275, width: '80%', marginLeft: '3%'}}>
      <Text>
      { props.thisOne === 'm'? <Text allowFontScaling={false} style={{fontSize:16, color: 'white' }}> HEIGHT </Text>
      : <Text allowFontScaling={false} style={{fontSize: 16, color: '#95A5A6'}}> HEIGHT </Text>
    }
      </Text>
      </View>
      <View style={{flex: 0.14}} />
      {
        props.thisOne === 'm'? <TextInput
            style={{width: '90%', color: 'white', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onChangeText={event => {
              props.setMetre(event);
            }}
            value={props.metre}
          /> :
          <TextInput
            style={{width: '90%', color: '#95A5A6', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.metre === '. . . . .') {
                props.setMetre('');
              }
              props.setThisOne('m');
            }}
            onChangeText={event => {
              props.setMetre(event);
            }}
            value={props.metre}
          />
      }
      <View style={{flex: 0.2, justifyContent: 'center', width: '80%', marginLeft:'3%'}}>
       <Text>
      { props.thisOne === 'm'? <Text allowFontScaling={false} style={{fontSize:10, color: 'white' }}> METRE </Text>
      : <Text allowFontScaling={false} style={{fontSize: 10, color: '#95A5A6'}}> METRE </Text>
    }
      </Text>
      </View>
      </LinearGradient>
    )
  } else {
    // Foot & Inch
    return(
      <LinearGradient  colors={props.thisOne === 'fi' ? ['#5dcbd3','#1e5081'] : ['white', 'white']} style={{flex: 0.9, flexDirection: 'column',width: '85%', marginRight: '2%', borderRadius: 17,shadowColor: '#000',shadowOffset:{ width: 0, height: 3} ,shadowOpacity: 1, shadowRadius: 4.65, elevation: 6 }}>
      <View style={{flex: 0.1}} />
      <View style={{flex: 0.275}}>
      <Text>
      { props.thisOne === 'fi'? <Text allowFontScaling={false} style={{fontSize:16, color: 'white' }}> HEIGHT </Text>
      : <Text allowFontScaling={false} style={{fontSize: 16, color: '#95A5A6'}}> HEIGHT </Text>
    }
      </Text>
      </View>
      <View style={{flex: 0.3, flexDirection: 'row'}}>
      <View style={{flex: 1, width:'50%'}}>
      {
        props.thisOne === 'fi'? <TextInput
            style={{width: '90%', color: 'white', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onChangeText={event => {
              props.setFoot(event);
            }}
            value={props.foot}
          /> :
          <TextInput
            style={{width: '90%', color: '#95A5A6', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.foot === '. . . . .') {
                props.setFoot('');
              }
              props.setThisOne('fi');
            }}
            onChangeText={event => {
              props.setFoot(event);
            }}
            value={props.foot}
          />
      }
      </View>
      <View style={{flex: 1, width:'50%'}}>
      {
        props.thisOne === 'fi'? <TextInput
            style={{width: '90%', color: 'white', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onChangeText={event => {
              props.setInch(event);
            }}
            value={props.inch}
          /> :
          <TextInput
            style={{width: '90%', color: '#95A5A6', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.foot === '. . . . .') {
                props.setInch('');
              }
              props.setThisOne('fi');
            }}
            onChangeText={event => {
              props.setInch(event);
            }}
            value={props.inch}
          />
      }
      </View>
        </View>
      <View style={{flex: 0.19, justifyContent: 'center', flexDirection: 'row'}}>
      <View style={{flex: 1, width: '50%', justifyContent: 'center'}}>
       <Text>
      { props.thisOne === 'fi'? <Text allowFontScaling={false} style={{fontSize:10, color: 'white' }}> Foot </Text>
      : <Text allowFontScaling={false} style={{fontSize: 10, color: '#95A5A6'}}> Foot </Text>
    }
      </Text>
      </View>
      <View style={{flex: 1, width: '50%', justifyContent: 'center'}}>
       <Text>
      { props.thisOne === 'fi'? <Text allowFontScaling={false} style={{fontSize:10, color: 'white' }}> Inch </Text>
      : <Text allowFontScaling={false} style={{fontSize: 10, color: '#95A5A6'}}> Inch </Text>
    }
      </Text>
      </View>
      </View>
      </LinearGradient>
    )
  }
}
/* Height Section end */
/* Weight Section start */
function WeightSection(props) {
  if (props.whichWeight) {
    // Kg
    return(
      <LinearGradient  colors={props.thisOne === 'k' ? ['#5dcbd3','#1e5081'] : ['white', 'white']} style={{flex: 0.9, flexDirection: 'column',width: '85%', marginRight: '2%', borderRadius: 17,shadowColor: '#000',shadowOffset:{ width: 0, height: 3} ,shadowOpacity: 1, shadowRadius: 4.65, elevation: 6 }}>
      <View style={{flex: 0.14}} />
      <View style={{flex: 0.275, width: '80%', marginLeft: '3%'}}>
      <Text>
      { props.thisOne === 'k'? <Text allowFontScaling={false} style={{fontSize:16, color: 'white' }}> WEIGHT </Text>
      : <Text allowFontScaling={false} style={{fontSize: 16, color: '#95A5A6'}}> WEIGHT </Text>
    }
      </Text>
      </View>
      <View style={{flex: 0.14}} />
      {
        props.thisOne === 'k'? <TextInput
            style={{width: '90%', color: 'white', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            onFocus={() => {
              if (props.kg === '. . . . .') {
                props.setKg('');
              }
              props.setThisOne('k');
            }}
            keyboardType="decimal-pad"
            onChangeText={event => {
              props.setKg(event);
            }}
            value={props.kg}
          /> :
          <TextInput
            style={{width: '90%', color: '#95A5A6', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.kg === '. . . . .') {
                props.setKg('');
              }
              props.setThisOne('k');
            }}
            onChangeText={event => {
              props.setKg(event);
            }}
            value={props.kg}
          />
      }
      <View style={{flex: 0.2, justifyContent: 'center', width: '80%', marginLeft:'3%'}}>
       <Text>
      { props.thisOne === 'k'? <Text allowFontScaling={false} style={{fontSize:10, color: 'white' }}> Kg </Text>
      : <Text allowFontScaling={false} style={{fontSize: 10, color: '#95A5A6'}}> Kg </Text>
    }
      </Text>
      </View>
      </LinearGradient>
    )
  } else {
    // Pound
    return(
      <LinearGradient  colors={props.thisOne === 'p' ? ['#5dcbd3','#1e5081'] : ['white', 'white']} style={{flex: 0.9, flexDirection: 'column',width: '85%', marginRight: '2%', borderRadius: 17,shadowColor: '#000',shadowOffset:{ width: 0, height: 3} ,shadowOpacity: 1, shadowRadius: 4.65, elevation: 6 }}>
      <View style={{flex: 0.14}} />
      <View style={{flex: 0.275, width: '80%', marginLeft: '3%'}}>
      <Text>
      { props.thisOne === 'p'? <Text allowFontScaling={false} style={{fontSize:16, color: 'white' }}> WEIGHT </Text>
      : <Text allowFontScaling={false} style={{fontSize: 16, color: '#95A5A6'}}> WEIGHT </Text>
    }
      </Text>
      </View>
      <View style={{flex: 0.14}} />
      {
        props.thisOne === 'p'? <TextInput
            style={{width: '90%', color: 'white', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            onFocus={() => {
              if (props.pound === '. . . . .') {
                props.setPound('');
              }
              props.setThisOne('p');
            }}
            keyboardType="decimal-pad"
            onChangeText={event => {
              props.setPound(event);
            }}
            value={props.pound}
          /> :
          <TextInput
            style={{width: '90%', color: '#95A5A6', fontSize: 15, marginLeft: '3%'}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.pound === '. . . . .') {
                props.setPound('');
              }
              props.setThisOne('p');
            }}
            onChangeText={event => {
              props.setPound(event);
            }}
            value={props.pound}
          />
      }
      <View style={{flex: 0.2, justifyContent: 'center', width: '80%', marginLeft:'3%'}}>
       <Text>
      { props.thisOne === 'p'? <Text allowFontScaling={false} style={{fontSize:10, color: 'white' }}> Pound </Text>
      : <Text allowFontScaling={false} style={{fontSize: 10, color: '#95A5A6'}}> Pound </Text>
    }
      </Text>
      </View>
      </LinearGradient>
    )
  }
}
/* Weight Section end */
/* Resualt Section start */
function ResualtSection(props) {
  if (props.whichCal) {
    if (props.rMetre !== '. . . . .') {
      if (props.rKg !== '. . . . .') {
        // Resualt for Metric
        return (
              <Text
                style={{width: '50%', color: 'rgb(22,34,48)', fontSize: 25 , textAlign: 'center'}}
                allowFontScaling={false}
                numberOfLines={1}>
                {props.rKg / (props.rMetre * props.rMetre)}
              </Text>
        );
      } else {
        return (
              <Text
                style={{width: '85%', color: 'rgb(22,34,48)', fontSize: 15 , textAlign: 'center'}}
                allowFontScaling={false}
                numberOfLines={2}>
                please write your Weight
              </Text>
        );
      }
    } else {
      return (
            <Text
              style={{width: '85%', color: 'rgb(22,34,48)', fontSize: 15 , textAlign: 'center'}}
              allowFontScaling={false}
              numberOfLines={2}>
              please Write your Height
            </Text>
      );
    }
  } else {
    if (props.rFoot !== '. . . . .') {
      if (props.rInch !== '. . . . .') {
        if (props.rPound !== '. . . . .') {
          // Resualt for Foot&Inch&Pound
          return (
                <Text
                  style={{width: '50%', color: 'rgb(22,34,48)', fontSize: 25 , textAlign: 'center'}}
                  allowFontScaling={false}
                  numberOfLines={1}>
                  {703 *
                    (props.rPound /
                      ((props.rFoot * 12 + props.rInch) *
                        (props.rFoot * 12 + props.rInch)))}
                </Text>
          );
        } else {
          return (
                <Text
                  style={{width: '85%', color: 'rgb(22,34,48)', fontSize: 15 , textAlign: 'center'}}
                  allowFontScaling={false}
                  numberOfLines={1}>
                  please Write your Weight
                </Text>
          );
        }
      } else {
        return (
              <Text
                style={{width: '85%', color: 'rgb(22,34,48)', fontSize: 15 , textAlign: 'center'}}
                allowFontScaling={false}
                numberOfLines={2}>
                please write your height (Inch)
              </Text>
        );
      }
    } else {
      return (
            <Text
              style={{width: '85%', color: 'rgb(22,34,48)', fontSize: 15 , textAlign: 'center'}}
              allowFontScaling={false}
              numberOfLines={2}>
              please write your height (Foot)
            </Text>
      );
    }
  }
}
/* Resualt section end */

export default ScreenBmi;
