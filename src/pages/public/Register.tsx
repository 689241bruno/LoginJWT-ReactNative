import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Register = () => {
  const insets = useSafeAreaInsets();
  const [oculto, setOculto] = useState(true);
  const navigation = useNavigation<any>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <Animatable.View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#FFF",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ textAlign: "center" }}>
            <MaterialIcons name="arrow-back" size={40} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.h1}>
        <Image
          source={require("../../assets/Macawdemy_Letreiro.png")}
          style={styles.imagemMacaw}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput
              label="Nome"
              value={nome}
              onChangeText={setNome}
              mode="outlined"
              activeOutlineColor="#0c4499ff"
            />
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              mode="outlined"
              autoCapitalize="none"
              error={!email.includes("@") && email !== ""}
              activeOutlineColor="#0c4499ff"
            />
            <TextInput
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              mode="outlined"
              autoCapitalize="none"
              secureTextEntry={oculto}
              right={
                <TextInput.Icon
                  icon={oculto ? "eye-off" : "eye"}
                  onPress={() => setOculto(!oculto)}
                />
              }
              activeOutlineColor="#0c4499ff"
            />
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#0c4499ff", "#51bcd6ff", "#239fbeff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btnAcessar}
            >
              <Text style={styles.btnTextAcessar}>Cadastrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 12 }}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  botaoVoltar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    justifyContent: "center",
  },
  h1: {
    height: 70,
    marginTop: 20,

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagemMacaw: {
    width: "70%",
  },
  main: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    height: "80%",
    width: "90%",

    justifyContent: "space-evenly",
  },
  inputs: {
    height: "50%",

    justifyContent: "space-evenly",
  },
  btnAcessar: {
    height: 50,
    width: "100%",
    backgroundColor: "#013D7A",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  btnTextAcessar: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 12,
    color: "#0c4499ff",
  },
});

export default Register;
