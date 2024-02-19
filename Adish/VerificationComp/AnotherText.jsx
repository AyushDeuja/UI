import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AnotherText({onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onPress}>Log in to another account!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    top: 240
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
