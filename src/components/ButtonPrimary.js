import { Pressable, StyleSheet, Text,} from 'react-native'
import React from 'react'

const ButtonPrimary = ({titulo, onPress}) => {
  return (
    <Pressable style={styles.boton} onPress={onPress}>
      <Text style={styles.text}>{titulo}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
  boton:{
    marginTop:10,
    marginBottom:20,
    backgroundColor:"#AFB796",
    padding:10,
    borderRadius:10,
    width:"80%",
    alignItems:"center",
    
  },

  text:{
    color:"black",
    fontSize:16,
  }
})