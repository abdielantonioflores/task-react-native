import React, { useState, useEffect } from "react";
import { describe, expect, test } from '@jest/globals';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useNavigation } from '@react-navigation/native';
import '@testing-library/jest-dom'
import ModalCard from '../app/components/modal/comp.modal'
import store from "../app/store";
import { Provider } from 'react-redux'
import fetchMock from 'jest-fetch-mock';
import { useAppDispatch, useAppSelector } from '../app/aplication/hooks-redux'
import { setAddTask } from '../app/slice/TaskListApp'
import { setIsAutheticate } from '../app/slice/configuration'
import { View } from 'react-native';
beforeAll(() => {
    fetchMock.enableMocks();

});

describe('Componet <ModalCard/> ', () => {
    it('Carga de Componente  de manera correcta ', async () => {
        // let dispatch = useAppDispatch;
        fetchMock.mockResponse(JSON.stringify({}));

        let navigation = useNavigation;

        const TestComponent = () => {
            const [modalVisible, setModalVisible] = useState(false);
            return (
                <View>
                    <ModalCard modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </View>
            )
        };

        render(
            <View>
                <Provider store={store}>
                    <TestComponent />
                </Provider>
            </View>

        )


        // expect(() => screen.getByText(/ Agregue su nueva  tarea /i)).toThrow(
        //     'Unable to find an element with text: /Agregue su nueva  tarea/i',
        //   );

    })




})
