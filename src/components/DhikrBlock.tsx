import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import InnerDhikrBlock from './InnerDhikrBlock';

// type DhikrProps = {
//   nameOfDhikr?: string;
//   translation?: string;
// };

const DhikrBlock = () => {
  const [dhikrBlockOpen, setDhikrBlockOpen] = useState(false);

  function openCloseDhikrBlock() {
    console.log('DhikrBlock: ', dhikrBlockOpen);
    setDhikrBlockOpen(!dhikrBlockOpen);
  }

  return (
    <View style={styles.rootViewStyling}>
      <TouchableOpacity onPress={openCloseDhikrBlock}>
        <View style={styles.outerBlock}>
          <View>
            <Text>Dhikr Block</Text>
          </View>
        </View>
        {/* End Outer Layer block  */}
      </TouchableOpacity>
      {/* On Press Logic */}
      <InnerDhikrBlock />
      <TouchableOpacity
        onPress={openCloseDhikrBlock}
        style={styles.closeButtonStyling}>
        <Text style={styles.upArrow}> ^ </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DhikrBlock;

const styles = StyleSheet.create({
  rootViewStyling: {
    borderWidth: 2,
    width: '95%',
    marginBottom: 10,
  },

  outerBlock: {
    borderColor: 'black',
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  innerBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButtonStyling: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    // height: '100%',
  },
  upArrow: {
    fontSize: 45,
  },
});
