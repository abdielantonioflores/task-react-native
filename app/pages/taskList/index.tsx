
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../aplication/hooks-redux'
interface TaskListProps {

}
const TaskList: React.FC<TaskListProps> = () => {
  const navigation = useNavigation();
  const dataAuth = useAppSelector((state) => {
    return { config: state.configurationapp, task: state.tarkReducer }
  })
  // console.log(JSON.stringify(dataAuth.task))
  return (
    <View style={styles.container} data-testid="TaskList">
      <Text> Cantidad de tareas : {dataAuth.task.list.length}</Text>
      <FlatList
        data={dataAuth.task.list}
        renderItem={({ item }) => <Text style={styles.item} key={item.name}>{`\u2023 ${item.name}`}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default TaskList;