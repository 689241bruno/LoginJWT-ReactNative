import { Text, View, StyleSheet, Image } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as Progress from "react-native-progress";

const imagens = {
  Linguagens: require("../assets/pilha-de-livros.png"),
  Matemática: require("../assets/matematica.png"),
  Natureza: require("../assets/ambiental.png"),
  Humanas: require("../assets/livro-de-historia.png"),
  Redação: require("../assets/redacao.png"),
};

interface ContainerMateriaProps {
  name: keyof typeof imagens;
  progresso: number;
}

const ContainerMateria = (props: ContainerMateriaProps) => {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Bold": Roboto_700Bold,
  });

  const progresso = props.progresso * 100;

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.titulo}>
          <Text style={styles.tituloText}>{props.name}</Text>
        </View>
        <View style={styles.icone}>
          <Image
            style={styles.imagemMateria}
            source={imagens[props.name]}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.section2}>
        <Text> {progresso}%</Text>
        <Progress.Bar
          progress={props.progresso}
          width={250}
          height={10}
          color={"#4CAF50"}
          unfilledColor={"#E0E0E0"}
          borderRadius={0}
          borderColor="#E0E0E0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "90%",
    backgroundColor: "#cfcfcfff",
    borderRadius: 20,
    margin: 20,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    elevation: 5,
  },
  section1: {
    height: "64%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section2: {
    height: "34%",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titulo: {
    height: "100%",
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
  },
  icone: {
    height: "100%",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloText: {
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    fontSize: 20,
    color: "#3a3a3aff",
  },
  imagemMateria: {
    height: 70,
    width: 70,
  },
});

export default ContainerMateria;
