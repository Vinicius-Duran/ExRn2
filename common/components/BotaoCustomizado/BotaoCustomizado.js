import { Pressable, Text, StyleSheet } from "react-native";
import CORES from "../../constraints/cores";

const estilos = StyleSheet.create({
  botao: {
    padding: 16,
    borderRadius: 8,
  },
  um: {
    backgroundColor: CORES.VERMELHO,
    borderRadius: 30,
    paddingVerdical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "transparent",
    alignItems: "center",
    color: CORES.BRANCA,
  },
  dois: {
    backgroundColor: CORES.AZUL,
    borderRadius: 15,
    paddingVertical: 5,
    borderWidth: 10,
    borderColor: "transparent",
    color: CORES.BRANCA,
  },
  tres: {
    backgroundColor: CORES.VERDE_ESCURO,
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 70,
    borderColor: "transparent",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 5,
    alignItems: "center",
    color: CORES.BRANCA,
    borderRadius: -10,
  },
  quatro: {
    backgroundColor: CORES.AMARELO,
    justifyContent: "center",
    alignItems: "flex-end",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: CORES.PRETO,
    borderStyle: "dotted",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: CORES.PRETO,
  },
  cinco: {
    backgroundColor: CORES.ROXO,
    borderColor: CORES.PRETO,
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    color: CORES.BRANCA,
  },
  seis: {
    backgroundColor: CORES.LARANJA,
    borderBottomLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "transparent",
    alignItems: "flex-start",
    color: CORES.PRETO,
    borderRadius: -10,
  },
  sete: {
    backgroundColor: CORES.CINZA,
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 70,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "transparent",
    color: CORES.BRANCA,
    borderRadius: -10,
  },
  setedois: {
    backgroundColor: CORES.CINZA,
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 70,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "transparent",
    color: CORES.BRANCA,
    borderRadius: -10,
  },
  seisdois: {
    backgroundColor: CORES.LARANJA,
    borderBottomLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "transparent",
    alignItems: "flex-start",
    color: CORES.PRETO,
    borderRadius: -10,
  },
  textoBotao: {
    color: CORES.BRANCA,
    fontSize: 20,
    fontWeight: "400",
  },
  textoBotao2: {
    color: CORES.PRETO,
    fontSize: 20,
    fontWeight: "600",
  },
});

const BotaoCustomizado = (props) => {
  const estilosBotao = [estilos.botao];

  switch (props.cor) {
    case "1":
      estilosBotao.push(estilos.um);
      break;
    case "2":
      estilosBotao.push(estilos.dois);
      break;
    case "3":
      estilosBotao.push(estilos.tres);
      break;
    case "4":
      estilosBotao.push(estilos.quatro);
      break;
    case "5":
      estilosBotao.push(estilos.cinco);
      break;
    case "6":
      estilosBotao.push(estilos.seis);
      break;
    case "7":
      estilosBotao.push(estilos.sete);
      break;
    case "62":
      estilosBotao.push(estilos.seisdois);
      break;
    case "72":
      estilosBotao.push(estilos.setedois);
      break;
    default:
      estilosBotao.push(estilos.botaoPadrao);
      break;
  }

  const estilosTexto = [estilos.textoBotao];

  switch (props.cor) {
    case "1":
      estilosTexto.push(estilos.textoBotao);
      break;
    case "2":
      estilosTexto.push(estilos.textoBotao);
      break;
    case "3":
      estilosTexto.push(estilos.textoBotao);
      break;
    case "4":
      estilosTexto.push(estilos.textoBotao2);
      break;
    case "5":
      estilosTexto.push(estilos.textoBotao);
      break;
    case "6":
      estilosTexto.push(estilos.textoBotao2);
      break;
    case "7":
      estilosTexto.push(estilos.textoBotao);
      break;
    case "62":
      estilosTexto.push(estilos.textoBotao2);
      break;
    case "72":
      estilosTexto.push(estilos.textoBotao);
      break;
    default:
      estilosTexto.push(estilos.textoBotao2);
      break;
  }

  return (
    <Pressable style={estilosBotao} onPress={props.onPress}>
      <Text style={estilosTexto}>{props.children}</Text>
    </Pressable>
  );
};

export default BotaoCustomizado;
