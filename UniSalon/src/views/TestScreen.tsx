import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TestScreen = () => {
  return (
    <View style={[styles.card, styles.elevation]}>
      <View>
        <Text style={styles.heading}>React Native Box Shadow (Elevation)</Text>
      </View>
      <Text>
        Using the elevation style prop to apply box-shadow for Android devices
      </Text>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
