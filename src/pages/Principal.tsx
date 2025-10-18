import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContainerMateria from "../coponents/ContainerMateria";
import Header from "../coponents/Header";
import MenuBar from "../coponents/MenuBar";

const Principal = () => {
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
        <ScrollView>
          <ContainerMateria name="Matemática" progresso={0.5} />
          <ContainerMateria name="Linguagens" progresso={0.75} />
          <ContainerMateria name="Humanas" progresso={0.8} />
          <ContainerMateria name="Natureza" progresso={1} />
          <ContainerMateria name="Redação" progresso={0.1} />
        </ScrollView>
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

export default Principal;
