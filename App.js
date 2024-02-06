import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {

  const [newTarea, setNewTarea] = useState ({
    titulo:"",
    descripcion:""
  })
  const [tareas, setTarea] = useState([])

  const addTarea = () => {
    setTarea ([...tareas, newTarea])
    setNewTarea({
      titulo:"",
      descripcion:""
    })
  }

  const onHandlerTitulo = (t) => {
    setNewTarea ({...newTarea, titulo:t})
  }
  
  const onHandlerDescripcion = (t) => {
    setNewTarea ({...newTarea, descripcion:t})
  }


  return (
    <View style={styles.containerPadre}>
      <View style={styles.inputContainer}>
        <TextInput value={newTarea.titulo} onChangeText={onHandlerTitulo} style={styles.input} placeholder='Ingresar titulo' />
        <TextInput value={newTarea.descripcion} onChangeText={onHandlerDescripcion} style={styles.input} placeholder='Ingresar descripcion' />
        <Button title='Add' onPress={addTarea} />
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.tarjetaProd}>
          <Text style={styles.texto}>Tarea 1</Text>
          <Button title='Delete' />
        </View>
        
        <View style={styles.tarjetaProd}>
          <Text style={styles.texto}>Tarea 2</Text>
          <Button title='Delete'/>
        </View>

        <View style={styles.tarjetaProd}>
          <Text style={styles.texto}>Tarea 3</Text>
          <Button title='Delete'/>
        </View>
      </View>
      
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  containerPadre:{
    backgroundColor:"#DBDBDB", 
    flex:1, 
    paddingTop:30
  },

  inputContainer:{
    flexDirection:"",
    alignItems:"center",
    justifyContent:"space-around",
    

  },
  input:{
    width:250,
    borderWidth:2,
    margin:10,
    paddingVertical:5,
    paddingHorizontal:10
  },

  texto:{
    color:"white",
    fontSize:16,
    width:"70%"
  },

  cardsContainer:{
    alignItems:"center",
    gap:25,
    padding:10,
    marginTop:20
  },

  tarjetaProd:{
    flexDirection:"row",
    backgroundColor:"#204D79",
    padding:10,
    alignItems:"center",
    borderRadius:10
  },
})