import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
export default function EyeIcon({is_pass}) {
  const [passView, setPassView] = useState(true);
  const handlePress = () => {
    setPassView(!passView);
  }

  return (
    <View style={styles.Eye}>
       {is_pass ? (
        <TouchableOpacity onPress={handlePress}>
          <FontAwesomeIcon icon={passView ? 'eye' : 'eye-slash'} size={24} />
        </TouchableOpacity>
      ) : null}

      </View>
  )
}

const styles = StyleSheet.create({
    Eye:{
    position: 'absolute',
    right: 40,
    alignItems: 'center',
    },
})