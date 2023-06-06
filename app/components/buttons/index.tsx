import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../aplication/hooks-redux'
import { setAddTask } from '../../slice/TaskListApp'
import ModalCard from '../modal/comp.modal'
interface ButtonsOpstionsButton {
    navigation: any
}

const ButtonsOpstions: React.FC<ButtonsOpstionsButton> = ({ navigation }) => {

    const dataAuth = useAppSelector((state) => {
        return { config: state.configurationapp, task: state.tarkReducer }
    })

    const [modalVisible, setModalVisible] = useState(false);

    return (
        // Vista de la pantalla 
        <View style={styles.container}  data-testid="buttonsComp">
            {/* Botones de aggregar tareas y  listar las tareas  */}
            <Pressable style={styles.button} onPress={() => {
                navigation.navigate('Task-List');
            }}>
                <Text style={styles.text}>Task List - cant : {dataAuth.task.list.length}</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => {
                setModalVisible(true)
            }}>
                <Text style={styles.text}>Add Task</Text>
            </Pressable>

            {/* Modal del formulario para agregar la tarea  */}
            <ModalCard setModalVisible={setModalVisible} modalVisible={modalVisible}></ModalCard>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});




export default ButtonsOpstions;
