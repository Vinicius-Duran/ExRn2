import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome';
import BotaoCustomizado from '../../components/BotaoCustomizado/BotaoCustomizado';

const CalculadoraIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = parseFloat(altura);
      const pesoKg = parseFloat(peso);
      const imcCalculado = pesoKg / (alturaMetros * alturaMetros);
      setIMC(imcCalculado.toFixed(1));

      let classificacao;
      switch (true) {
        case imcCalculado < 18.5:
          classificacao = 'Abaixo do peso';
          break;
        case imcCalculado >= 18.5 && imcCalculado <= 24.9:
          classificacao = 'Peso normal';
          break;
        case imcCalculado >= 25.0 && imcCalculado <= 29.9:
          classificacao = 'Sobrepeso';
          break;
        case imcCalculado >= 30.0 && imcCalculado <= 34.9:
          classificacao = 'Obesidade Grau I';
          break;
        case imcCalculado >= 35.0 && imcCalculado <= 39.9:
          classificacao = 'Obesidade Grau II (severa)';
          break;
        default:
          classificacao = 'Obesidade Grau III (mórbida)';
          break;
      }
      setClassificacao(classificacao);
    } else {
      setIMC(null);
      setClassificacao('');
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='balance-scale' size={70} color="grey" />
      <View style={styles.container2}>
        <Text style={styles.label}>Altura (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <View style={styles.container3}>
          <BotaoCustomizado cor='72' onPress={calcularIMC}>
            Calcular IMC
          </BotaoCustomizado>
        </View>
        <Text style={styles.result}>IMC:</Text>
        <View style={styles.result3}>
          <Text style={styles.result2}>{imc}</Text>
        </View>
        {classificacao !== '' && (
          <Text style={styles.classificacao}>Classificação: {classificacao}</Text>
        )}
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
    borderColor: '#ccc',
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
  classificacao: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default CalculadoraIMC;
