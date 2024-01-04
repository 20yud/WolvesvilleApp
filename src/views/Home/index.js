import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Pressable, Text, View, Modal, TextInput, Button } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [isModal1Visible, setModal1Visible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [isModal3Visible, setModal3Visible] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredCode, setEnteredCode] = useState('');

    const toggleModal1 = () => {
        setModal1Visible(!isModal1Visible);
    };

    const toggleModal2 = () => {
        setModal2Visible(!isModal2Visible);
    };

    const toggleModal3 = () => {
        setModal3Visible(!isModal3Visible);
    };

    const toggleModals = () => {
        toggleModal2();
        toggleModal3();
    };

    const handleOKCreate = () => {
        toggleModal1();
        navigation.navigate('Create');
    }

    const handleOKJoin = () => {
        toggleModal3();
        navigation.navigate('Join');
    }

    const scanQRCode = () => {
        console.log('scan qr code');
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <Pressable style={styles.button} onPress={toggleModal1}>
                <Text style={styles.text}>Create Room</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={toggleModal2}>
                <Text style={styles.text}>Join Room</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Rules')}>
                <Text style={styles.text}>Open rules</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModal1Visible}
                onRequestClose={toggleModal1}
            >
                <View style={styles.modal}>
                    <View style={styles.box}>
                        <Text>Enter your name:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setEnteredName(text)}
                            value={enteredName}
                        />

                        <View style={styles.buttonWrap}>
                            <Button title="Cancel" onPress={toggleModal1} />
                            <Button title="OK" onPress={handleOKCreate} />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModal2Visible}
                onRequestClose={toggleModal2}
            >
                <View style={styles.modal}>
                    <View style={styles.box}>
                        <Text>Enter QR code:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setEnteredCode(text)}
                            value={enteredCode}
                        />

                        <View style={styles.buttonWrap}>
                            <Button title="Scan QR Code" onPress={scanQRCode} />
                            <Button title="Cancel" onPress={toggleModal2} />
                            <Button title="OK" onPress={toggleModals} />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModal3Visible}
                onRequestClose={toggleModal3}
            >
                <View style={styles.modal}>
                    <View style={styles.box}>
                        <Text>Enter your name:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setEnteredName(text)}
                            value={enteredName}
                        />

                        <View style={styles.buttonWrap}>
                            <Button title="Cancel" onPress={toggleModal3} />
                            <Button title="OK" onPress={handleOKJoin} />
                        </View>
                    </View>
                </View>
            </Modal>

            <StatusBar style="auto" />
        </View>
    )
}
export default Home;


