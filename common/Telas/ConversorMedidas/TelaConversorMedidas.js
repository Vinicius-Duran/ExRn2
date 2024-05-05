import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome5';

const ConversorComprimento = () => {
  const [centimetros, setCentimetros] = useState('');
  const [metros, setMetros] = useState('');
  const [quilometros, setQuilometros] = useState('');

  const atualizarCentimetros = (valor) => {
    setCentimetros(valor);
    setMetros((parseFloat(valor) / 100).toString());
    setQuilometros((parseFloat(valor) / 100000).toString());
  };

  const atualizarMetros = (valor) => {
    setMetros(valor);
    setCentimetros((parseFloat(valor) * 100).toString());
    setQuilometros((parseFloat(valor) / 1000).toString());
  };

  const atualizarQuilometros = (valor) => {
    setQuilometros(valor);
    setCentimetros((parseFloat(valor) * 100000).toString());
    setMetros((parseFloat(valor) * 1000).toString());
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='ruler' size={84} color="green" />
      <View style={styles.container2}>
        <Text style={styles.label}>Centímetros:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={centimetros}
          onChangeText={atualizarCentimetros}
        />
        <Text style={styles.label}>Metros:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={metros}
          onChangeText={atualizarMetros}
        />
        <Text style={styles.label}>Quilômetros:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quilometros}
          onChangeText={atualizarQuilometros}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container2: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: "500",
  },
});

export default ConversorComprimento;
