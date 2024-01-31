import {View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Coder, Bienvenidos a mi App!!</Text>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#11212D",
    flex:1,
  },
  texto:{
    color:"white"
  }
})