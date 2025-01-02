import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';

type HomeBlockProps = {
  name: string;
  blockColor: string;
  navigationTo: any; //has to be Any even if it's type screen
};

export default function HomeBlock(props: HomeBlockProps) {
  //   let bgColor = '#FFFFFF';

  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('white');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    console.log(props.navigationTo);
    switch (props.blockColor) {
      case 'black':
        setBgColor('#000000');
        break;
      case 'green':
        setBgColor('#268024');
        break;
      case 'red':
        setBgColor('#E4312B');
        setTextColor('black');
        break;
      case 'white':
        setBgColor('#FFFFFF');
        setTextColor('black');
        break;
      default:
        setBgColor('#FFFFFF');
        break;
    }
  }, [props.blockColor, props.navigationTo]);
  // Run effect when props.blockColor changes

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{flex: 1, width: '100%'}}
        onPress={() => navigation.navigate(props.navigationTo)}>
        <View style={[styles.box, {backgroundColor: bgColor}]}>
          <Text style={[styles.title, {color: textColor}]}> {props.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

// export default HomeBlock;
