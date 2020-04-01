import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


import Units from '../Components/units';

function UnitDic() {
  const route = useRoute();
  var Unitkind = route.params.name;
  var where = route.params.type;
  if (where === 'From') {
    return (
      
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1.5, y: 2}} colors={['#5dcbd3','#1e5081']} style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={{flex: 1, width: '100%'}}>
      <View style={{flex: 0.2, width: '100%', alignItems: 'center',paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginTop: '10%', color: 'white'}}>
      FROM
      </Text>
      </View>
      <View style={{flex: 0.8, backgroundColor: 'white', alignItems: 'flex-end', borderTopLeftRadius: 60}}>
      <View style={{flex: 0.9, marginTop: '20%', width: '90%'}}>
      <Units kind={Unitkind} type={where} />
      </View>
      </View>
      </ScrollView>
      </LinearGradient>
    );
  } else if (where === 'To') {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1.5, y: 2}} colors={['#1e5081','#5dcbd3']} style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={{flex: 1, width: '100%'}}>
      <View style={{flex: 0.2, width: '100%', alignItems: 'center',paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginTop: '10%', color: 'white'}}>
      To
      </Text>
      </View>
      <View style={{flex: 0.8, backgroundColor: 'white', alignItems: 'flex-end', borderTopRightRadius: 60}}>
      <View style={{flex: 0.9, marginTop: '20%', width: '90%'}}>
      <Units kind={Unitkind} type={where} />
      </View>
      </View>
      </ScrollView>
      </LinearGradient>
    );
  }
}

export default UnitDic;
