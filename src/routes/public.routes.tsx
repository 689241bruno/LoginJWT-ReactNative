import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../coponents/Header";

const PublicRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="login" component={Login} options={{ headerShown: false }} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
};

export default PublicRoutes;
