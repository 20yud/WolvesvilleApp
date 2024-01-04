import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import * as Actions from '../../actions';

const JoinScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [manualPartyCode, setManualPartyCode] = useState('');
  const [showManualInput, setShowManualInput] = useState(true);

  // Request camera permission when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const joinPartyFromQR = (partyCode) => {
    if (!partyCode) {
      Alert.alert('Join failed', "Can't join party without a valid code.");
    } else {
      // Thực hiện xử lý join party tại đây
      // Ví dụ: this.props.joinParty(partyCode);
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    setDisplayText(data);
    setShowManualInput(false); // Ẩn input và nút submit khi quét thành công
    joinPartyFromQR(data);
  };

  const handleManualJoin = () => {
    joinPartyFromQR(manualPartyCode);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setDisplayText('');
    setShowManualInput(true); // Hiện lại input và nút submit khi ấn "Tap to Scan Again"
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera} // Set the style for the camera view
        />
      </View>
      {scanned && (
        <TouchableOpacity
          style={styles.scanButton}
          onPress={handleScanAgain}
        >
          <Text style={styles.scanButtonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
      {displayText ? (
        <Text style={styles.displayText}>Scanned Party Code: {displayText}</Text>
      ) : null}

      {/* Hiển thị input và nút submit nếu showManualInput là true */}
      {showManualInput && (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setManualPartyCode(text)}
            value={manualPartyCode}
            placeholder="Enter Party Code"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleManualJoin}
          >
            <Text style={styles.submitButtonText}>Join Party</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 0.5,
  },
  camera: {
    flex: 1,
  },
  scanButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontSize: 18,
  },
  displayText: {
    marginTop: 20,
    fontSize: 18,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default JoinScreen;
