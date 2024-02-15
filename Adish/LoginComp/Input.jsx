import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function Input({text, icon}) {
  return (
    <View style={styles.InputContainer}>
    <View style={styles.LoginInput}>
      <TextInput placeholder={text} style={styles.LoginText} />
      <FontAwesomeIcon icon={icon} size={15} style={styles.LoginIcon} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    InputContainer:{
        paddingHorizontal:20,
        marginTop: 10
    },
  LoginInput: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 40,
},
LoginText: {
    fontSize: 15,
  },
  LoginIcon: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical:25,
    alignItems:'center',
    marginLeft:10
  },
});
