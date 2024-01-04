import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles.js';

const Join = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.back} onPress={() => navigation.goBack()}>BACK</Text>
            <View style={styles.wrap}>
                <Text style={styles.text}>Loading....</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}
export default Join;