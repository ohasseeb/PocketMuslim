import React from 'react';
import {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

// type InnerDhikrBlockProps = {
//   title?: string;
//   textObject?: string;
// };

const InnerDhikrBlock = () => {
  //   const [innerDhikrBlockOpen, setInnerDhikrBlockOpen] = useState(false);

  //   function openCloseInnerDhikrBlock() {
  //     setInnerDhikrBlockOpen(!innerDhikrBlockOpen);
  //   }

  return (
    <View style={styles.salatBlockView}>
      <Text style={styles.titleFont}> Hello</Text>
    </View>
  );
};

export default InnerDhikrBlock;

// Styles for the component
const styles = StyleSheet.create({
  touchableOpacity: {
    // Styling for the touchable opacity
    // width: '95%',
    // marginBottom: 15,
  },
  outerBlock: {
    // Styling for the outer block
    borderColor: 'black',
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleFont: {
    // Styling for the title font
    flex: 1,
    fontSize: 40,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  innerViewStyling: {
    // Styling for the inner view
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBlock: {
    // Styling for the inner block
    borderColor: 'black',
    width: '65%',
    height: '100%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  salatBlockView: {
    // Styling for the salat block view
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'space-between',
    alignItems: 'center',
  },
  closeButtonStyling: {
    // Styling for the close button
    alignItems: 'center',
    width: '100%',
    // height: '100%',
  },
  upArrow: {
    // Styling for the up arrow text
    fontSize: 27.5,
  },
});
