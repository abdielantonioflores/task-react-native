import React, { useState, useEffect } from "react";
import LoadingScreem from "../loading/loading.aplication";
import { useAppDispatch, useAppSelector } from '../../aplication/hooks-redux'
import { setIsAutheticate } from '../../slice/configuration'
import { setAddTask } from '../../slice/TaskListApp'
import { View, Text } from 'react-native';
interface ProviderAuthProps {
    children: any
}

const ProviderAuth: React.FC<ProviderAuthProps> = ({ children }) => {

    const dataAuth = useAppSelector((state) => {
        return { config: state.configurationapp, task: state.tarkReducer }
    })

    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(setIsAutheticate(true))

        fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
            .then(response => response.json())
            .then(data => {
                dispatch(setAddTask(data))
            })
            .catch(error => {
                console.error(error);
            });
    }, [dispatch])


    return dataAuth.config.isAuthenticate.value === false ? (
        <View data-testid="providerComp">
            <LoadingScreem />
        </View>) : (
        <View data-testid="providerComp">
            {children}
        </View>

    )

}

export default ProviderAuth;
