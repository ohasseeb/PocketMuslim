import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SalatBlock from '../components/Block';
import SurahDataJSON from '../jsonData/SurahData.json';

const SurahsPage = () => {
  const AlFatihaTransliteration = SurahDataJSON.Surah_Al_Fatiha.Transliteration;
  const AlFatihaTranslation = SurahDataJSON.Surah_Al_Fatiha.Translation;

  return (
    <View style={styles.container}>
      <Text> Surahs Page</Text>
      <ScrollView style={styles.scrollViewStyling}>
        <SalatBlock
          nameOfSalat="Al Fatiha"
          transliterationLines={AlFatihaTransliteration}
          translationLines={AlFatihaTranslation}
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
