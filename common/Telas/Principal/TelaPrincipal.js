import BotaoCustomizado from '../../components/BotaoCustomizado/BotaoCustomizado';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/FontAwesome5';
import CORES from '../../constraints/cores';
import TELAS from '../../constraints/telas';
import { BorderlessButton } from 'react-native-gesture-handler';

const estilos = StyleSheet.create({
    todo: {
        flex: 1,
        backgroundColor: CORES.FUNDO_PADRAO,
        margin: 10,
        padding: 10,
        gap: 20,
    },
    texto: {
        color: CORES.TEXTO_PADRAO,
        marginRight: 10,
        fontSize: 34,
    },
  });

const TelaPrincipal = (props) => {
  console.log(props);

  return (
    <View style={estilos.todo}>
        <View style={{alignSelf: 'baseline', alignItems: 'center', flexDirection:'row', padding: 8,}}>
            <Text style={estilos.texto} >Bem-vindo!</Text>
            <MaterialIcons name='grin-stars' size={24} color={"green"} />
        </View>

        <BotaoCustomizado cor='1' onPress={() => props.navigation.navigate(TELAS.Tela_ConsumoVeiculos)}>
            Média consumo veículos
        </BotaoCustomizado>

        <BotaoCustomizado cor='2' onPress={() => props.navigation.navigate(TELAS.Tela_CambioMoeda)}>
            Conversor de moedas
        </BotaoCustomizado>

        <BotaoCustomizado cor='3' onPress={() => props.navigation.navigate(TELAS.Tela_ConversorMedidas)}>
            Conversor de medidas
        </BotaoCustomizado>

        <BotaoCustomizado cor='4' onPress={() => props.navigation.navigate(TELAS.Tela_MediaNotas)}>
            Calcular média de notas
        </BotaoCustomizado>

        <BotaoCustomizado cor='5' onPress={() => props.navigation.navigate(TELAS.Tela_Calculadora)}>
            Calculadora
        </BotaoCustomizado>

        <BotaoCustomizado cor='6' onPress={() => props.navigation.navigate(TELAS.Tela_Salario)}>
            Calcular reajuste salarial 
        </BotaoCustomizado>

        <BotaoCustomizado cor='7' onPress={() => props.navigation.navigate(TELAS.Tela_IMC)}>
            Cálculo IMC
        </BotaoCustomizado>
    </View>
  );
};

export default TelaPrincipal;
