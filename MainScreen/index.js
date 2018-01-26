import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Привет!</Text>
        <Text>Нажми на значок, чтобы распознать, песню которая сейчас играет</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen