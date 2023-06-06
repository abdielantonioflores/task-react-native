import React, { useState, useEffect } from "react";
import LoadingScreem from "../loading/loading.aplication";
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../aplication/hooks-redux'
import { setIsAutheticate } from '../../slice/configuration'
import { setNewTask } from '../../slice/TaskListApp'
import { Button, StyleSheet, Text, View, Pressable, Alert, Modal, TextInput, SafeAreaView } from 'react-native';
interface ModalProps {
    modalVisible: any,
    setModalVisible: any
}

const ModalCard: React.FC<ModalProps> = ({ modalVisible, setModalVisible }) => {
// estado de la aplicacion 

    const dataAuth = useAppSelector((state) => {
        return { config: state.configurationapp, task: state.tarkReducer }
    })

    const [text, onChangeText] = React.useState('Nombre de la Tarea');
    const dispatch = useAppDispatch();
// funcion para guardar  la tarea nueva 
    const saveTaskInApp = () => {
        let id = dataAuth.task.list.length - 1
        dispatch(setNewTask({ name: text, id: id + 2, avatar: "https://cdn.fakercloud.com/avatars/josep_martins_128.jpg" }))
        setModalVisible(!modalVisible)
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    <View style={styles.modalView}>

                        <Text> Agregue su nueva  tarea </Text>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                            />

                        </SafeAreaView>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => saveTaskInApp()}>
                            <Text style={styles.textStyle}>Save Task</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )



}


const styles = StyleSheet.create({
    container: {
        marginTop: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 6,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 20,
        borderRadius: 4,
        elevation: 3,
        margin: 12,
        padding: 5,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    modalView: {
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        width: '90%',
        // alignItems: 'center',
        // position:'relative',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});



export default ModalCard;
