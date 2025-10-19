import { TextInput, Checkbox } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../coponents/Header";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { lime100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { login } = useAuth();
  const inserts = useSafeAreaInsets();
  const [checked, setChecked] = useState(false);
  const [oculto, setOculto] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<any>();

  return (
    <Animatable.View
      style={{
        flex: 1,
        paddingTop: inserts.top,
        paddingBottom: inserts.bottom,
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar}>
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
        <View style={styles.section1}>
          <View>
            <View style={styles.login}>
              <View style={styles.inputs}>
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
              <View style={styles.opcoes}>
                <View style={styles.lembrarDeMim}>
                  <Checkbox
                    color="#0c4499ff"
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => setChecked(!checked)}
                  />
                  <Text style={{ fontSize: 12 }}>Lembrar de mim </Text>
                  <Text style={{ fontSize: 12, color: "#b8b8b8ff" }}>
                    (30 dias)
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.link}>Esqueci minha senha</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => login(email, senha, checked)}>
                <LinearGradient
                  colors={["#0c4499ff", "#51bcd6ff", "#239fbeff"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.btnAcessar}
                >
                  <Text
                    style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                  >
                    Entrar
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.linha}></View>
          <Text style={{ backgroundColor: "#FFF", margin: 4 }}>ou</Text>
          <View style={styles.linha}></View>
        </View>
        <View style={styles.section3}>
          <TouchableOpacity style={styles.btnOpcoes}>
            <Image
              style={styles.imageOpcoes}
              source={require("../../assets/Google_icone.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpcoes}>
            <Image
              style={styles.imageOpcoes}
              source={require("../../assets/Facebook_icone.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpcoes}>
            <Image
              style={styles.imageOpcoes}
              source={require("../../assets/Microsoft_icone.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 12 }}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.link}>Criar conta</Text>
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
    height: 500,
    width: "90%",
    backgroundColor: "#FFF",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  section1: {
    height: "60%",
    paddingTop: 30,
  },
  login: {
    alignSelf: "center",
    height: "100%",
    justifyContent: "space-around",
  },
  inputs: {
    height: "50%",
    justifyContent: "space-around",
  },
  opcoes: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 6,
  },
  lembrarDeMim: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    fontSize: 12,
    color: "#0c4499ff",
    textAlign: "center",
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
  section2: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  linha: {
    height: 3,
    width: "45%",
    backgroundColor: "#808080ff",
  },
  section3: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnOpcoes: {
    height: 90,
    width: 100,
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 4,
    borderColor: "#808080ff",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageOpcoes: {
    height: 50,
    width: 50,
  },
  footer: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
