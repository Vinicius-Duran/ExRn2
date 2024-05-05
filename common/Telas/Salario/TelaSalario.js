import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome';
import BotaoCustomizado from '../../components/BotaoCustomizado/BotaoCustomizado';

const CalculadoraSalario = () => {
  const [salarioAtual, setSalarioAtual] = useState('');
  const [cargoConfianca, setCargoConfianca] = useState(false);
  const [novoSalario, setNovoSalario] = useState(null);

  const calcularNovoSalario = () => {
    const salario = parseFloat(salarioAtual);
    let reajuste = 0;

    switch (true) {
      case salario <= 2000:
        reajuste = 0.08;
        break;
      case salario <= 3000:
        reajuste = 0.07;
        break;
      case salario <= 4000:
        reajuste = 0.06;
        break;
      default:
        reajuste = 0.05;
        break;
    }

    if (cargoConfianca) {
      reajuste += 0.05;
    }

    const novoSalarioCalculado = salario + salario * reajuste;
    setNovoSalario(novoSalarioCalculado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='money' size={70} color="#FF8C00" />
      <View style={styles.container2}>
        <Text style={styles.label}>Salário Atual:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={salarioAtual}
          onChangeText={setSalarioAtual}
        />
        <Text style={styles.label}>Cargo de Confiança:</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={cargoConfianca}
            onValueChange={setCargoConfianca}
            thumbColor="#fff"
            trackColor={{ false: '#ccc', true: '#62A9FF' }}
          />
          <Text style={styles.switchText}>{cargoConfianca ? 'Sim' : 'Não'}</Text>
        </View>
        <View style={styles.container3}>
          <BotaoCustomizado cor='62' onPress={calcularNovoSalario}>
            Calcular Novo Salário
          </BotaoCustomizado>
        </View>
        <Text style={styles.result}>Resultado:</Text>
        <View style={styles.result3}>
          <Text style={styles.result2}>R$ {novoSalario}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 20,
    gap: 20,
    width: '100%',
  },
  container2: {
    width: '100%',
    alignItems: 'flex-start',
  },
  container3: {
    marginTop: 10,
    width: '100%',
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
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default CalculadoraSalario;
