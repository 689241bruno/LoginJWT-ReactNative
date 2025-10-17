import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const imagens = {
  PlanoEstudos: require("../assets/PlanoEstudos_Icon.png"),
  Flashcards: require("../assets/Flashcards_Icon.png"),
  Home: require("../assets/Home_Icon.png"),
  Ranking: require("../assets/Ranking_Icon.png"),
  Config: require("../assets/Config_Icon.png"),
};

const MenuBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.botao}>
          <Image
            style={styles.icon}
            source={imagens.PlanoEstudos}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image
            style={styles.icon}
            source={imagens.Flashcards}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image
            style={styles.icon}
            source={imagens.Home}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image
            style={styles.icon}
            source={imagens.Ranking}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image
            style={styles.icon}
            source={imagens.Config}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: "#338BE5",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  main: {
    height: "90%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  botao: {
    height: 50,
    width: 50,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
});

export default MenuBar;
