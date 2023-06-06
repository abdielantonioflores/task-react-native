import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/pages/home';
import TaskList from './app/pages/taskList'
import store from "./app/store";
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer fallback={<Text>Cargando Informacion ...</Text>} >
      <Provider store={store}>
        <Stack.Navigator>
          {/* Component Home -  componete principal  */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Lista de Opciones  ' }}
          />
          {/* Pagina de lista de tareas  */}
          <Stack.Screen name="Task-List" component={TaskList} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;