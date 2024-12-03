import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di atas kotak */}
      <Text style={styles.text}>Teks di Atas Kotak</Text>

      {/* Dua kotak horizontal */}
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold', // Gaya tebal (bold)
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun kotak secara horizontal
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  },
box2 :{
  width: 100,
  height: 100,
  backgroundColor: 'green',
  margin: 10,
}
}
);

export default App;
