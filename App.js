import {View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.containerPadre}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Ingresar tarea' />
        <Button title='Add' />
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.tarjetaProd}>
          <Text style={styles.texto}>Tarea 1</Text>
          <Button title='Delete'/>
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
    flexDirection:"row",
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