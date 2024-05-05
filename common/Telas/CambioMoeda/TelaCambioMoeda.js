import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome';

const ConversorMoeda = () => {
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');
  const [euro, setEuro] = useState('');

  const converterRealParaDolar = () => {
    if (real !== '') {
      const valorReal = parseFloat(real);
      const valorDolar = valorReal / 5.10;
      setDolar(valorDolar.toFixed(2));
    } else {
      setDolar('');
    }
  };

  const converterRealParaEuro = () => {
    if (real !== '') {
      const valorReal = parseFloat(real);
      const valorEuro = valorReal / 5.50;
      setEuro(valorEuro.toFixed(2));
    } else {
      setEuro('');
    }
  };

  const converterDolarParaReal = () => {
    if (dolar !== '') {
      const valorDolar = parseFloat(dolar);
      const valorReal = valorDolar * 5.10;
      setReal(valorReal.toFixed(2));
    } else {
      setReal('');
    }
  };

  const converterEuroParaReal = () => {
    if (euro !== '') {
      const valorEuro = parseFloat(euro);
      const valorReal = valorEuro * 5.50;
      setReal(valorReal.toFixed(2));
    } else {
      setReal('');
    }
  };

  return (
    <View style={styles.container}>

      <MaterialIcons name='money' size={84} color={"blue"} />
      <View style={styles.container2}>
        <Text style={styles.label}>Valor Real</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={real}
          onChangeText={setReal}
          onBlur={() => {
            converterRealParaDolar();
            converterRealParaEuro();
          }}

        />
        <Text style={styles.label}>Valor Dolar</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={dolar}
          onChangeText={setDolar}
          onBlur={converterDolarParaReal}
        />
        <Text style={styles.label}>Valor Euro</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={euro}
          onChangeText={setEuro}
          onBlur={converterEuroParaReal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    paddingHorizontal: 5,
    padding: 20,
    gap: 30,
  },
  container2: {
    alignItems: 'start',
    paddingHorizontal: 20,
    width: '100%',
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

export default ConversorMoeda;
