import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const DhikrPage = () => {
  return (
    <View style={styles.container}>
      <Text>Dhikr Page</Text>
    </View>
  );
};

export default DhikrPage;

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
