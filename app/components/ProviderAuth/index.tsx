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
// Optengo el estado inicial de la aplicacion 
    const dataAuth = useAppSelector((state) => {
        return { config: state.configurationapp, task: state.tarkReducer }
    })

    const dispatch = useAppDispatch();

    // Alimento el estado una vez cargue el componente con las tareas 
    useEffect(() => {

        dispatch(setIsAutheticate(true))

        fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
            .then(response => response.json())
            .then(data => {
                // alimento mi estado de task, guardando la lista  que me retorna este endpoint
                dispatch(setAddTask(data))
            })
            .catch(error => {
                console.error(error);
            });
    }, [dispatch])

// antes de cargar los componente quiero que mi aplicacion cargue mi loading y a lo que este listo el componente renderizar el componente hijo que sea necesario 
    return dataAuth.config.isAuthenticate.value === false ? (
        <View data-testid="providerComp">
            {/* Component Loading de pre-carga  */}
            <LoadingScreem />
        </View>) : (
            // renderizado de los componentes hijos 
        <View data-testid="providerComp">
            {children}
        </View>

    )

}

export default ProviderAuth;
