import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

const Create = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.back} onPress={() => navigation.goBack()}>BACK</Text>
            <View style={styles.wrap}>
                <Text style={styles.text}>Create room</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}
export default Create;