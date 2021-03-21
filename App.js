import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { AddTodo } from './src/AddTodo';
import {Navbar} from './src/Navbar'
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    
    // setTodos(todos.concat([ newTodo ]))
    // setTodos((prevTodos) => {
    //     return [
    //       ...prevTodos,
    //       newTodo
    //     ]
    // })

    setTodos(prev => [
      ...prev, 
      {
      id: Date.now().toString(),
      title: title
    }
  ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="Заметки"/>
      <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => 
            <Todo todo={item} onRemove={removeTodo} />
        }
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20
  }
});
