import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/AntDesign';
import BotaoCustomizado from '../../components/BotaoCustomizado/BotaoCustomizado';

const NotaCalculator = () => {
  const [av1, setAv1] = useState('');
  const [av2, setAv2] = useState('');
  const [notaSa, setNotaSa] = useState('');
  const [media, setMedia] = useState(null);
  const [situacao, setSituacao] = useState('');

  const calcularMedia = () => {
    if (av1 && av2 && notaSa) {
      const av1Num = parseFloat(av1);
      const av2Num = parseFloat(av2);
      const notaSaNum = parseFloat(notaSa);
      const media = (av1Num + av2Num + notaSaNum * 2) / 4;
      setMedia(media.toFixed(2));
      setSituacao(media >= 7 ? 'APROVADO' : 'REPROVADO');
    } else {
      setMedia(null);
      setSituacao('');
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='filetext1' size={70} color="yellow" />
      <View style={styles.container2}>
        <Text style={styles.label}>AV1:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={av1}
          onChangeText={setAv1}
        />
        <Text style={styles.label}>AV2:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={av2}
          onChangeText={setAv2}
        />
        <Text style={styles.label}>Nota SA:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={notaSa}
          onChangeText={setNotaSa}
        />
        <View style={styles.container3}>
          <BotaoCustomizado cor='4' onPress={calcularMedia}>
            Calcular Média
          </BotaoCustomizado>
        </View>
        <Text style={styles.result}>Resultado:</Text>
        {media !== null && (
          <View style={styles.result3}>
            <Text style={styles.result2}>{media}</Text>
            <Text style={styles.result2}>{situacao}</Text>
          </View>
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
});

export default NotaCalculator;
