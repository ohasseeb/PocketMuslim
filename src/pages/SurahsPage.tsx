import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SalatBlock from '../components/Block';
import SalatDataJSON from '../jsonData/SalatData.json';

const SurahsPage = () => {
  const AdhanTransliterationLines = SalatDataJSON.Adhan.Transliteration;
  const AdhanTranslationLines = SalatDataJSON.Adhan.Translation;

  console.log(AdhanTranslationLines);

  return (
    <View style={styles.container}>
      <Text> Surahs Page</Text>
      <ScrollView style={styles.scrollViewStyling}>
        <SalatBlock
          nameOfSalat="Al Fatiha"
          transliterationLines={AdhanTransliterationLines}
          translationLines={AdhanTranslationLines}
        />
      </ScrollView>
    </View>
  );
};

export default SurahsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D3C4',
    alignItems: 'center',
    height: '100%',
  },
  scrollViewStyling: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    marginBottom: 10,
  },
});
