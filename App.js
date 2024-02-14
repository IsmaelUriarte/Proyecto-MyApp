import { useState } from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDeleteTarea from './src/components/ModalDeleteTarea';
import AddTask from './src/components/AddTask';
import ListTask from './src/components/ListTask';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [tareaSelected, setTareaSelected] = useState({})
  const [tareaTitulo, setTareaTitulo] = useState ("")
  const [tareaDescripcion, setTareaDescripcion] = useState ("")
  const [tareas, setTareas] = useState([])
  const screenWidth = Dimensions.get ('window').width

  const addTarea = () => {

    const newTarea = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      completed:false,
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
    setTareas (tareas.filter (tarea => tarea.id != tareaSelected.id))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTareas(tareas.map(tarea =>{
      if (tarea.id === id) return{...tarea,...{completed:!tarea.completed}}
      return tarea
    }))
  }

  return (
    <View style={styles.containerPadre}>

      <AddTask
        tareaTitulo={tareaTitulo}
        onHandlerTitulo={onHandlerTitulo}
        tareaDescripcion={tareaDescripcion}
        onHandlerDescripcion={onHandlerDescripcion}
        addTarea={addTarea}
      />

      <ListTask
      tareas={tareas}
      onHandlerModal={onHandlerModal}
      screenWidth={screenWidth}
      updateTaskCompleted={updateTaskCompleted}
      />

      <ModalDeleteTarea
        modalVisible={modalVisible}
        tareaSelected={tareaSelected}
        deleteTarea={deleteTarea}
        onHandlerModal={onHandlerModal}
      />
      
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
})