import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SurahBlock from '../components/SurahBlock';
const SurahsPage = () => {
  return (
    <View style={styles.container}>
      <Text>Surahs PAge</Text>
      <SurahBlock nameOfSurah="Al Fatiha" />
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
