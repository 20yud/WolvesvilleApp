import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

const Rules = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.back} onPress={() => navigation.goBack()}>BACK</Text>
            <View style={styles.wrap}>
                <Text style={styles.text}>Rules</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}
export default Rules;