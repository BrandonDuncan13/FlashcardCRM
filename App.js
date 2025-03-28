import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Flashcard from './components/Flashcard'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Flashcard frontText="Keith Lauritsen" backText="Pets: Charlie, Bruce, and more!" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
