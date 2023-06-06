import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useNavigation } from '@react-navigation/native';
import '@testing-library/jest-dom'
import HomeScreem from '../app/pages/home'
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

describe('Componet <HomeScreem/> ', () => {
  it('Carga de Componente  de manera correcta ', async () => {
    // let dispatch = useAppDispatch;
    fetchMock.mockResponse(JSON.stringify({}));

    let navigation = useNavigation;

    const TestComponent = () => {
      const dispatch = useAppDispatch();
      act(() => {
        dispatch(setIsAutheticate(true))

        dispatch(setAddTask({ name: "test" }));
      });
      return (
        <View>
          <HomeScreem navigation={navigation} />
        </View>
      )
    };

    const { getByTestId } = render(
      <View>
        <Provider store={store}>
          <TestComponent />
        </Provider>
      </View>

    )

    expect(getByTestId('providerComp')).toBeInTheDocument();
    expect(getByTestId('buttonsComp')).toBeInTheDocument();

  })


  

})
