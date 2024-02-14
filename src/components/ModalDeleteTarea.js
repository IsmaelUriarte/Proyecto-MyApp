import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalDeleteTarea = ({tareaSelected, 
                            deleteTarea, 
                            onHandlerModal, 
                            modalVisible}) => {

  return (
        <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={()=> onHandlerModal({})}
        >
          <View>
            <Text>Deseas eliminar esta tarea? : {tareaSelected.titulo}</Text>
            <Button title='si' onPress={deleteTarea} />
            <Button title='no' onPress={()=> onHandlerModal({})}/>
          </View>
        </Modal>
  )
}

export default ModalDeleteTarea

const styles = StyleSheet.create({
  
})