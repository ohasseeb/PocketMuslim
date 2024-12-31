import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
type SurahProps = {
  nameOfSurah?: string;
  transliteration?: Object;
  translation?: Object;
};

const SurahBlock = (props: SurahProps) => {
  const [openSurahBlock, setOpenSurahBlock] = useState(false);

  function openCloseSurahBlock() {
    setOpenSurahBlock(!openSurahBlock);
    console.log('Open Surah Block: ', openSurahBlock);
    console.log('Hello World');
  }

  return (
    <View style={styles.rootViewStyling}>
      <TouchableOpacity onPress={openCloseSurahBlock}>
        <View style={styles.outerBlock}>
          <Text> {props.nameOfSurah} </Text>
        </View>
      </TouchableOpacity>

      {/* {openSurahBlock && ( */}
      <View style={styles.salatBlockView}>
        <TouchableOpacity
          onPress={openCloseSurahBlock}
          style={styles.closeButtonStyling}>
          <Text style={styles.upArrow}> ^^^ </Text>
        </TouchableOpacity>
      </View>
      {/* // )} */}
    </View>
  );
};

export default SurahBlock;

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
