import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [idSelected, setIdSelected] = useState("")
  const [newTarea, setNewTarea] = useState ({
    titulo:"",
    descripcion:"",
    id:""
  })
  const [tareas, setTareas] = useState([])

  const addTarea = () => {
    setTareas ([...tareas, newTarea])
    setNewTarea({
      titulo:"",
      descripcion:"",
      id:""
    })
  }

  const onHandlerTitulo = (t) => {
    const id = uuid.v4()
    setNewTarea ({...newTarea, titulo:t, id})
  }
  
  const onHandlerDescripcion = (t) => {
    setNewTarea ({...newTarea, descripcion:t})
  }

  const onHandlerModal = (id) => {
    setIdSelected(id)
    setModalVisible (true)
    
  }

  const deleteTarea = (id) => {
    setTareas (tareas.filter (tarea => tarea.id != idSelected))
  }

  return (
    <View style={styles.containerPadre}>
      <View style={styles.inputContainer}>
        <TextInput value={newTarea.titulo} onChangeText={onHandlerTitulo} style={styles.input} placeholder='Ingresar titulo' />
        <TextInput value={newTarea.descripcion} onChangeText={onHandlerDescripcion} style={styles.input} placeholder='Ingresar descripcion' />
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

        <Modal
        visible={modalVisible}
        >
          
          <View>
            <Text>Deseas eliminar esta tarea?</Text>
            <Button title='si' onPress={()=> {
              deleteTarea()
              setModalVisible(false)
          }} />
            <Button title='no' onPress={()=> setModalVisible(false)}/>
          </View>
        </Modal>

      </View>
      
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