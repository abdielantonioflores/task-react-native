
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
interface HomeScreenProps {

}
const LoadingScreem: React.FC<HomeScreenProps> = () => {
   
    return (
        <View style={styles.container}>
            <Text>  Cargado informacion.... </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default LoadingScreem;