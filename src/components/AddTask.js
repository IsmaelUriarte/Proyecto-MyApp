import { StyleSheet, TextInput, View, } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({tareaTitulo, 
                    onHandlerTitulo, 
                    tareaDescripcion, 
                    onHandlerDescripcion, 
                    addTarea}) => {
  return (
    <View style={styles.container}>
        <TextInput value={tareaTitulo} 
                    onChangeText={onHandlerTitulo} 
                    placeholderTextColor="black"
                    placeholder='Ingresar titulo'
                    maxLength={30}
                    style={styles.input}
        />
        <TextInput value={tareaDescripcion}
                    onChangeText={onHandlerDescripcion}
                    placeholderTextColor="black"
                    placeholder='Ingresar descripcion' 
                    multiline
                    numberOfLines={3}
                    maxLength={100}
                    style={styles.input}
        />
        <ButtonPrimary titulo="Agregar Tarea" onPress={addTarea} />
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#56765C",
        alignItems:"center",
        justifyContent:"space-around",
        paddingTop:5,
        paddingTop:20,
      },

      input:{
        width:"80%",
        borderWidth:2,
        marginHorizontal:"10%",
        marginVertical:5,
        paddingVertical:7,
        paddingHorizontal:15,
        fontSize:15,
        borderRadius:18,
        textAlignVertical:"top",
      },
    
})