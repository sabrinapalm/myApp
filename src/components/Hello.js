import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c43a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    borderStyle: 'solid',
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
  }
});
