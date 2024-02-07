import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid'
import ModalDeleteTarea from './src/components/ModalDeleteTarea';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [TareaSelected, setTareaSelected] = useState({})
  const [tareaTitulo, setTareaTitulo] = useState ("")
  const [tareaDescripcion, setTareaDescripcion] = useState ("")
  const [tareas, setTareas] = useState([])

  const addTarea = () => {

    const newTarea = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      titulo:tareaTitulo,
      descripcion:tareaDescripcion
    }

    
    setTareas([...tareas, newTarea])
    setTareaTitulo("")
    setTareaDescripcion("")
  }

  const onHandlerTitulo = (t) => {
    // const id = uuid.v4();
    setTareaTitulo(t)
  }
  
  const onHandlerDescripcion = (t) => {
    setTareaDescripcion(t)
  }

  const onHandlerModal = (tarea) => {
    setTareaSelected(tarea)
    setModalVisible (!modalVisible)
    
  }

  const deleteTarea = () => {
    setTareas (tareas.filter (tarea => tarea.id != TareaSelected.id))
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.containerPadre}>
      <View style={styles.inputContainer}>
        <TextInput value={tareaTitulo} onChangeText={onHandlerTitulo} style={styles.input} placeholder='Ingresar titulo' />
        <TextInput value={tareaDescripcion} onChangeText={onHandlerDescripcion} style={styles.input} placeholder='Ingresar descripcion' />
        <Button title='Add' onPress={addTarea} />
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={tareas}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
                                    <View style={styles.tarjetaProd}>
                                      <Text style={styles.texto}>{item.titulo}</Text>
                                      <Button title='Delete' onPress={() => onHandlerModal(item.id)} />
                                    </View>
          )}
        />
      </View>

      <ModalDeleteTarea
        modalVisible={modalVisible}
        TareaSelected={TareaSelected}
        deleteTarea={deleteTarea}
        onHandlerModal={onHandlerModal}
      />
      
      {/*<ScrollView style={styles.cardsContainer}>
        
        {
          tareas.map( tarea => (  <View key={tarea.id} style={styles.tarjetaProd}>
                                    <Text style={styles.texto}>{tarea.titulo}</Text>
                                    <Button title='Delete'/>
                                  </View>
            
          )

          )
        }
        
      </ScrollView>*/}
      
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
    gap:25,
    padding:10,
    
  },

  tarjetaProd:{
    flexDirection:"row",
    backgroundColor:"#204D79",
    padding:10,
    alignItems:"center",
    borderRadius:10,
    marginTop:20
  },
})