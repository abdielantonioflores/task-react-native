import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useNavigation } from '@react-navigation/native';
import '@testing-library/jest-dom'
import ButtonsOpstions from '../app/components/buttons'
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

describe('Componet <Buttons/> ', () => {
  it('Carga de Componente  de manera correcta ', async () => {
    // let dispatch = useAppDispatch;
    fetchMock.mockResponse(JSON.stringify({}));

    let navigation = useNavigation;


  render(
      <View>
        <Provider store={store}>
        <ButtonsOpstions navigation={navigation} />
        </Provider>
      </View>

    )


    // expect(screen.getByTestId('buttonsComp')).toBeInTheDocument();

  })


  

})
