import React from 'react';
import {useState} from 'react'; // Import useState for managing component state
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

// Define the type for the component props
type InnerSalatBlockProps = {
  title: string; // Title of the salat block
  textObj: Object; // Object containing text lines
};

const InnerSalatBlock = (props: InnerSalatBlockProps) => {
  // Define state for whether the salat block is open or closed
  const [salatBlockOpen, setSalatBlockOpen] = useState(false);

  // Function to toggle the salat block open/closed state
  function openCloseSalatBlock() {
    setSalatBlockOpen(!salatBlockOpen);
  }

  return (
    <View style={styles.salatBlockView}>
      {/* Touchable opacity to toggle the salat block */}
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={openCloseSalatBlock}>
        {/* Title of the salat block */}
        <Text style={styles.titleFont}> {props.title} : </Text>
      </TouchableOpacity>

      {/* Render the inner view if the salat block is open */}
      {salatBlockOpen && (
        <View style={styles.innerViewStyling}>
          {/* Map through the textObj and render each line */}
          {Object.entries(props.textObj).map(([key, line]) => (
            <Text key={key}>{line}</Text>
          ))}
          {/* Button to close the salat block */}
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

export default InnerSalatBlock;

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
