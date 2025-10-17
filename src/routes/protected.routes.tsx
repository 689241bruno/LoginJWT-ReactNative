import { Image } from "react-native-animatable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Principal from "../pages/Principal";
import Configuracoes from "../pages/Configuracoes";
import Flashcards from "../pages/Flashcards";
import PlanoEstudos from "../pages/PlanoEstudos";
import Ranking from "../pages/Ranking";

const icons = {
  principal: require("../assets/Home_Icon.png"),
  principalActivate: require("../assets/HomeActivate_Icon.png"),

  config: require("../assets/Config_Icon.png"),
  configActivate: require("../assets/ConfigActivate_Icon.png"),

  flashcardsActivate: require("../assets/FlashcardsActivate_Icon.png"),
  flashcards: require("../assets/Flashcards_Icon.png"),

  planoEstudosActivate: require("../assets/PlanoEstudosActivate_Icon.png"),
  planoEstudos: require("../assets/PlanoEstudos_Icon.png"),

  rankingActivate: require("../assets/RankingActivate_Icon.png"),
  ranking: require("../assets/Ranking_Icon.png"),
};

const Tab = createBottomTabNavigator();

const ProtectedRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="principal"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 10,
          height: 90,
          padding: 5,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          const iconSize = 30; // Tamanho fixo para suas imagens
          if (route.name === "planoEstudos") {
            iconSource = focused
              ? icons.planoEstudosActivate
              : icons.planoEstudos;
          } else if (route.name === "principal") {
            iconSource = focused ? icons.principalActivate : icons.principal;
          } else if (route.name === "configuracoes") {
            iconSource = focused ? icons.configActivate : icons.config;
          } else if (route.name === "flashcards") {
            iconSource = focused ? icons.flashcardsActivate : icons.flashcards;
          } else if (route.name === "ranking") {
            iconSource = focused ? icons.rankingActivate : icons.ranking;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: iconSize,
                height: iconSize,
                // Opcional: Se suas imagens forem preenchidas (monocromáticas),
                // você pode usar a cor dinâmica fornecida pelo Tab Navigator
                // tintColor: focused ? '#FF6347' : '#CCCCCC',
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="planoEstudos"
        component={PlanoEstudos}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="flashcards"
        component={Flashcards}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="principal"
        component={Principal}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ranking"
        component={Ranking}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="configuracoes"
        component={Configuracoes}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ProtectedRoutes;
