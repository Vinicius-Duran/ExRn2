import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome5';
import BotaoCustomizado from '../../components/BotaoCustomizado/BotaoCustomizado';
import { Picker } from '@react-native-picker/picker';

const Calculadora = () => {
  const [numeroUm, setNumeroUm] = useState('');
  const [numeroDois, setNumeroDois] = useState('');
  const [operador, setOperador] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    if (numeroUm && numeroDois && operador) {
      const num1 = parseFloat(numeroUm);
      const num2 = parseFloat(numeroDois);
      let resultado;

      switch (operador) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          resultado = num1 / num2;
          break;
        default:
          resultado = 'Operador inválido';
          break;
      }

      setResultado(resultado.toString());
    } else {
      setResultado('');
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='calculator' size={70} color="purple" />
      <View style={styles.container2}>
        <Text style={styles.label}>Número Um:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numeroUm}
          onChangeText={setNumeroUm}
        />
        <Text style={styles.label}>Operador:</Text>
        <View style={styles.pickerContainer}>
        <Picker
          style={styles.operador}
          selectedValue={operador}
          onValueChange={(itemValue) => setOperador(itemValue)}
        >
          <Picker.Item label="Somar" value="+" />
          <Picker.Item label="Subtrair" value="-" />
          <Picker.Item label="Multiplicar" value="*" />
          <Picker.Item label="Dividir" value="/" />
        </Picker>
        </View>
        <Text style={styles.label}>Número Dois:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numeroDois}
          onChangeText={setNumeroDois}
        />
        <View style={styles.container3}>
          <BotaoCustomizado cor='5' onPress={calcularResultado}>
            Calcular
          </BotaoCustomizado>
        </View>
        <Text style={styles.result}>Resultado:</Text>
        <View style={styles.result3}>
          <Text style={styles.result2}>{resultado}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: 20,
    gap: 20,
  },
  container2: {
    width: '100%',
    alignItems: 'start',
  },
  container3: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '500',
    gap: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 35,
    marginTop: 50,
    fontWeight: 'bold',
  },
  result2: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: '500',
  },
  result3: {
    alignItems: 'center',
  },
  operador: {
    borderWidth: 2,
  },
  pickerContainer: {
    borderWidth: 2,
    marginBottom: 10,
    width: '100%',
  },
});

export default Calculadora;
