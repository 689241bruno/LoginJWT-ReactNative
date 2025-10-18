import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContainerMateria from "../coponents/ContainerMateria";
import Header from "../coponents/Header";

const Configuracoes = () => {
  const { user, logout } = useAuth();
  const inserts = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: inserts.top,
      }}
    >
      <Header />
      <View style={styles.main}>
        <Text>{`seja bem vindo ${user?.nome}`}</Text>
        <TouchableOpacity onPress={logout}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#338BE5",
  },
});

export default Configuracoes;
