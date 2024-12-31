import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SalatBlock from '../components/SalatBlock';
import SalatDataJSON from '../jsonData/SalatData.json';

const AdhanTransliterationLines = SalatDataJSON.Adhan.Transliteration;
const AdhanTranslationLines = SalatDataJSON.Adhan.Translation;

const IqamaTransliterationLines = SalatDataJSON.Iqama.Transliteration;
const IqamaTranslationLines = SalatDataJSON.Iqama.Translation;

const AyatAlKursiTransliteration = SalatDataJSON.AyatAlKursi.Transliteration;
const AyatAlKursiTranslation = SalatDataJSON.AyatAlKursi.Translation;

const DuaQunootTransliteration = SalatDataJSON.DuaQunoot.Transliteration;
const DuaQunootTranslation = SalatDataJSON.DuaQunoot.Translation;

const FullTashaHudTransliteration = SalatDataJSON.Full_Tashahud.Transliteration;
const FullTashaHudTranslation = SalatDataJSON.Full_Tashahud.Translation;

const PartialTashaHudTransliteration =
  SalatDataJSON.Partial_Tashahud.Transliteration;
const PartialTashaHudTranslation = SalatDataJSON.Partial_Tashahud.Translation;

const SalatPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyling}>
        <SalatBlock
          nameOfSalat={'ADHAN'}
          transliterationLines={AdhanTransliterationLines}
          translationLines={AdhanTranslationLines}
        />
        <SalatBlock
          nameOfSalat="IQAMA"
          transliterationLines={IqamaTransliterationLines}
          translationLines={IqamaTranslationLines}
        />
        <SalatBlock
          nameOfSalat="
          Dua Qunoot
          "
          transliterationLines={DuaQunootTransliteration}
          translationLines={DuaQunootTranslation}
        />
        <SalatBlock
          nameOfSalat="Ayat Al Kursi"
          transliterationLines={AyatAlKursiTransliteration}
          translationLines={AyatAlKursiTranslation}
        />
        <SalatBlock
          nameOfSalat="Partial Tashahud"
          transliterationLines={PartialTashaHudTransliteration}
          translationLines={PartialTashaHudTranslation}
        />
        <SalatBlock
          nameOfSalat=" Full Tashahud"
          transliterationLines={FullTashaHudTransliteration}
          translationLines={FullTashaHudTranslation}
        />
      </ScrollView>
    </View>
  );
};

export default SalatPage;

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
