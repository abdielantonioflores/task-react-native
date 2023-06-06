import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'
import { useNavigation } from '@react-navigation/native';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom'
import ProviderAuth from '../app/components/ProviderAuth'
import Toggle from '../app/components/Toggle'
import store from "../app/store";
import { Provider } from 'react-redux'
import fetchMock from 'jest-fetch-mock';
import { useAppDispatch, useAppSelector } from '../app/aplication/hooks-redux'
import { setAddTask } from '../app/slice/TaskListApp'
import { setIsAutheticate } from '../app/slice/configuration'
import { View, Text } from 'react-native';

beforeAll(() => {
    fetchMock.enableMocks();


});

describe('Componet <ProviderAuth/>', () => {
    it('Carga de ProviderAuth  de manera correcta y carga de los children del component', async () => {
        fetchMock.mockResponse(JSON.stringify({ /* mock response data */ }));
        const TestComponentSinUpdate = () => {
            const dispatch = useAppDispatch();
            act(() => {
                dispatch(setAddTask({ name: "test" }));
            });
            return (
                <ProviderAuth>
                    <Text> Test de children </Text>
                </ProviderAuth>
            )
        };
        
        const { getByTestId } = render(<Provider store={store}><TestComponentSinUpdate></TestComponentSinUpdate></Provider>)
        expect(getByTestId('providerComp')).toBeInTheDocument();

    })

})
