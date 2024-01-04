// CreateScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CreateScreen = () => {
  const [deviceCode, setDeviceCode] = useState('');

  useEffect(() => {
    // Generate a random device code (you can implement your own logic)
    const generatedCode = Math.random().toString(36).substring(2, 8);
    setDeviceCode(generatedCode);
  }, []);

  if (!deviceCode) {
    // Return a loading state or null while the deviceCode is being generated
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Create Screen!</Text>
      <QRCode
        value={deviceCode}
        size={250}
        color="black"
        backgroundColor="white"
      />
      <Text style={styles.codeText}>{deviceCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: '',
    fontSize: 16,
    marginBottom: 20,
  },
  codeText: {
    marginTop: 20,
    marginBottom: 300,
    fontSize: 18,
  },
});

export default CreateScreen;
