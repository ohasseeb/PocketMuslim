import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeBlock from '../components/HomeBlock';

const HomePage = () => {
  return (
    // Outer Most Div Start
    <View style={styles.container}>
      {/* Group 1 Start :  */}
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HomeBlock name={'SALAT'} blockColor="green" navigationTo="Salat" />
        <HomeBlock name={'SURAHS'} blockColor="red" navigationTo="Surahs" />
      </View>

      {/* Group 1 End:  */}

      {/* Group 2 Start */}
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HomeBlock
          // name={'PRAYER TIMES'}
          name={'DHIKR'}
          blockColor="black"
          navigationTo="Dhikr"
        />
        <HomeBlock
          name={'PILLARS OF ISLAM'}
          blockColor="white"
          navigationTo="PillarsOfIslam"
        />
      </View>
      {/* Group 2 End */}
    </View> // Outer most Div End
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderColor: 'green',
    borderWidth: 30,
  },
  box: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
