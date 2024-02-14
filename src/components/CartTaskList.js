import { StyleSheet, Switch, Text, View,  } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CartTaskList = ({item, onHandlerModal, screenWidth, updateTaskCompleted}) => {
  return (
    <View style={[styles.tarjetaProd, {width:screenWidth -45}]}>
        <Text style={styles.texto}>Titulo: {item.titulo}</Text>
        <Text style={styles.textoDes}>Descripcion: {item.descripcion}</Text>
        <Text style={styles.texto}>Actualización: {item.updateAt}</Text>
        <Text style={styles.texto}>Creación: {item.createAt}</Text>

        <View style={styles.completedContainer}>
          <Switch 
            value={item.completed} 
            onValueChange={() => updateTaskCompleted(item.id)} 
          />
          <Text style={styles.textCompleted}>{item.completed ? "Completado" : "Pendiente"}</Text>
        </View>

        <ButtonPrimary titulo='Delete' onPress={() => onHandlerModal(item)} />
    </View>
  )
}

export default CartTaskList

const styles = StyleSheet.create({
    tarjetaProd:{
        backgroundColor:"#56765C",
        padding:10,
        marginHorizontal:5,
        alignItems:"center",
        borderRadius:10,
        marginTop:20
      },

      texto:{
        marginLeft:15,
        marginTop:10,
        marginBottom:15,
        color:"white",
        fontSize:18,
        width:"100%"
      },

      textoDes:{
        marginLeft:15,
        marginBottom:15,
        color:"white",
        fontSize:18,
        width:"100%"
      },

      completedContainer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:15
      },

      textCompleted:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
      }
})