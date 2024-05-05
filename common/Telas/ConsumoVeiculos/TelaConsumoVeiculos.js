import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome5';
import BotaoCustomizado from '../../components/BotaoCustomizado/BotaoCustomizado';

const FuelConsumptionCalculator = () => {
  const [distancia, setDistancia] = useState('');
  const [combustívelUsado, setcombustívelUsado] = useState('');
  const [consumo, setconsumo] = useState(null);

  const calcularConsumo = () => {
    if (distancia && combustívelUsado) {
      const distanciaNum = parseFloat(distancia);
      const combustívelUsadoNum = parseFloat(combustívelUsado);
      const consumo = distanciaNum / combustívelUsadoNum;
      setconsumo(consumo.toFixed(2));
    } else {
      setconsumo(null);
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='car' size={70} color={"red"} />
      <View style={styles.container2}>
        <Text style={styles.label}>Distância(km):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distancia}
          onChangeText={setDistancia}
        />
        <Text style={styles.label}>Quantidade de combustível(litros):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={combustívelUsado}
          onChangeText={setcombustívelUsado}
        />
        <View style={styles.container3}>
          <BotaoCustomizado cor='1' onPress={calcularConsumo}>
            Calcular
          </BotaoCustomizado>
        </View>
        <Text style={styles.result}> Resultado: </Text>
        <View style={styles.result3}>
          <Text style={styles.result2}> {consumo} km/l </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'topo',
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
    fontWeight: "500",
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
    fontWeight: "bold",
  },
  result2: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: "500",
  },
  result3: {
    alignItems: "center",
  },
});

export default FuelConsumptionCalculator;
