import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

// Get the width of the device
const { width: screenWidth } = Dimensions.get('window');

const Flashcard = ({ frontText, backText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <View style={styles.flashcardContainer}>
      {/* TouchableOpacity wrapped only around the flashcard itself */}
      <TouchableOpacity onPress={() => setFlipped(!flipped)}>
        <View style={styles.flashcard}>
          <Text style={styles.flashcardText}>{flipped ? backText : frontText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flashcardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  flashcard: {
    width: screenWidth * 0.90, // Set flashcard width to 90% of the device's width
    height: 250, // Fixed height for the flashcard
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  flashcardText: {
    fontSize: 20, // Ensure the font size is appropriate for the fixed size
    color: 'black',
    textAlign: 'center', // Center the text horizontally
    fontWeight: 'bold',
    flexWrap: 'wrap', // Allow text to wrap inside the flashcard if it overflows
  },
});

export default Flashcard;
