import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const images = {
  Macawdemy: require("../assets/Macawdemy_Letreiro.png"),
  Conquistas: require("../assets/Conquests_Icon.png"),
  Perfil: require("../assets/macawdemy-logo-app.png"),
};

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}>
        <Image
          style={styles.botao}
          source={images.Conquistas}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.letreiro}>
        <Image
          style={{ height: 70, width: "80%" }}
          source={images.Macawdemy}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.botao}>
        <Image
          style={styles.botao}
          source={images.Perfil}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  letreiro: {
    height: "100%",
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    height: 50,
    width: 50,
  },
});

export default Header;
