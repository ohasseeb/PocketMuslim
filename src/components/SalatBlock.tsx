import React from 'react';
import {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
// import SalatDataJSON from '../jsonData/SalatData.json';
import InnerSalatBlock from './InnerSalatBlock';

type SalatProps = {
  nameOfSalat?: string;
  transliterationLines?: Object;
  translationLines?: Object;
};

const SalatBlock = (props: SalatProps) => {
  const [salatBlockOpen, setSalatBlockOpen] = useState(false); // Inferred to be a bool
  //   const transliterationLines = SalatDataJSON.Adhan.Transliteration;
  //   const translationLines = SalatDataJSON.Adhan.Translation;

  function openCloseSalatBlock() {
    setSalatBlockOpen(!salatBlockOpen);
    // // const transliterationLength = Object.keys(
    // //   SalatDataJSON.Adhan.Transliteration,
    // // ).length;

    // // console.log(SalatDataJSON.Adhan.Transliteration);
    // // console.log('Length:', transliterationLength);
  }

  return (
    <View style={styles.rootViewStyling}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={openCloseSalatBlock}>
        <View style={styles.outerBlock}>
          <View style={styles.innerBlock}>
            <Text style={styles.blockText}> {props.nameOfSalat}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {salatBlockOpen && (
        <View style={styles.salatBlockView}>
          <InnerSalatBlock
            title="Transliteration"
            textObj={props.transliterationLines}
          />
          <InnerSalatBlock
            title="Translation"
            textObj={props.translationLines}
          />

          {/* To Do Later  */}
          {/* <InnerSalatBlock title="Definition" textObj={' '} /> */}
          <TouchableOpacity
            onPress={openCloseSalatBlock}
            style={styles.closeButtonStyling}>
            <Text style={styles.upArrow}> ^ </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SalatBlock;

const styles = StyleSheet.create({
  rootViewStyling: {
    borderWidth: 2,
    // height: '100%',
    width: '95%',
    marginBottom: 10,
  },
  touchableOpacity: {
    // width: '95%',
    // marginBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#D9D3C4',
    alignItems: 'center',
  },

  blockText: {
    fontSize: 30,
    alignItems: 'center',
    textTransform: 'uppercase',
    flexWrap: 'wrap',
  },

  outerBlock: {
    borderColor: 'black',
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  titleFont: {
    fontSize: 40,
    marginBottom: 10,
  },

  innerBlock: {
    borderColor: 'black',
    width: '65%',
    height: '100%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  salatBlockView: {
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'space-between',
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
