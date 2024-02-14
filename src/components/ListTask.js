import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CartTaskList from './CartTaskList'

const ListTask = ({tareas, 
                    onHandlerModal,
                    screenWidth,
                    updateTaskCompleted}) => {
  return (
    <View style={styles.cardsContainer}>
        <FlatList
        horizontal={true}
          pagingEnabled={true}
          data={tareas}
          keyExtractor={item => item.id}
          renderItem={({item}) => (<CartTaskList 
                                    item={item} 
                                    onHandlerModal={onHandlerModal} 
                                    screenWidth={screenWidth}
                                    updateTaskCompleted={updateTaskCompleted}/>
                                    )}
        />
    </View>
  )
}

export default ListTask

const styles = StyleSheet.create({
    cardsContainer:{
        gap:25,
        padding:10,
        
      },
})