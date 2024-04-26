import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CORES from './common/constraints/cores';
import TELAS from './common/constraints/telas';
//
import TelaConversorMedidas from './common/Telas/ConversorMedidas/TelaConversorMedidas';
import TelaConsumoVeiculos from './common/Telas/ConsumoVeiculos/TelaConsumoVeiculos';
import TelaCambioMoeda from './common/Telas/CambioMoeda/TelaCambioMoeda';
import TelaCalculadora from './common/Telas/Calculadora/TelaCalculadora';
import TelaMediaNotas from './common/Telas/MediaNotas/TelaMediaNotas';
import TelaPrincipal from './common/Telas/Principal/TelaPrincipal';
import TelaSalario from './common/Telas/Salario/TelaSalario';
import TelaIMC from './common/Telas/IMC/TelaIMC';
//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
  },
});

export default function App() {
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={TELAS.Tela_Principal}
            component={TelaPrincipal}
            options={{
              title: 'Tela Principal',
            }}
          />
          <Stack.Screen name={TELAS.Tela_ConsumoVeiculos} component={TelaConsumoVeiculos} options={{ title: 'Média consumo veículos' }} />
          
          <Stack.Screen name={TELAS.Tela_CambioMoeda} component={TelaCambioMoeda} options={{ title: 'Conversor moedas' }} />

          <Stack.Screen name={TELAS.Tela_ConversorMedidas} component={TelaConversorMedidas} options={{ title: 'Conversor medidas' }} />

          <Stack.Screen name={TELAS.Tela_MediaNotas} component={TelaMediaNotas} options={{ title: 'Media Notas' }} />

          <Stack.Screen name={TELAS.Tela_Calculadora} component={TelaCalculadora} options={{ title: 'Calculadora' }} />

          <Stack.Screen name={TELAS.Tela_Salario} component={TelaSalario} options={{ title: 'Ajuste Salarial' }} />

          <Stack.Screen name={TELAS.Tela_IMC} component={TelaIMC} options={{ title: 'Calcular IMC' }} />

        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style='auto' />
    </View>
  );
}
