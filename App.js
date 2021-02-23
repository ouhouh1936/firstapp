import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      {' '}
      <View style={styles.blueBox}>
        {' '}
        <Text style={styles.inBlueText}>Hello World</Text>{' '}
      </View>{' '}
      <View style={styles.yellowBox}>
        {' '}
        <TouchableOpacity style={styles.customBtn}>
          {' '}
          <Button color={`#0b0b0b`} title="CLICK"></Button>{' '}
        </TouchableOpacity>{' '}
      </View>{' '}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
  blueBox: {
    flex: 2,
    backgroundColor: `#0be`,
    alignItems: 'center',
    justifyContent: `center`,
  },
  inBlueText: {fontSize: 30, color: `#fff`, fontWeight: `700`},
  yellowBox: {flex: 1, alignItems: 'center', justifyContent: `center`},
  customBtn: {width: 120, height: 40, backgroundColor: `#ff3`, borderRadius: 4},
});
export default App;
