import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalDeleteTarea = (prop) => {
    const {TareaSelected, deleteTarea, onHandlerModal, modalVisible} = prop
  return (
        <Modal
        visible={modalVisible}
        >
          <View>
            <Text>Deseas eliminar esta tarea? : {TareaSelected.titulo}</Text>
            <Button title='si' onPress={deleteTarea} />
            <Button title='no' onPress={()=> onHandlerModal({})}/>
          </View>
        </Modal>
  )
}

export default ModalDeleteTarea

const styles = StyleSheet.create({})