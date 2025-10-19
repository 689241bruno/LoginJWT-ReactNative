import { createContext, useState, useEffect, PropsWithChildren } from "react";
import axios from "axios";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

type User = {
  id: string;
  nome: string;
  email: string;
  token: string;
  lembrar: boolean;
};

type AuthContextProps = {
  user: User | null;
  login: (email: string, senha: string, lembrar: boolean) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getStorageData() {
      const storageData = await AsyncStorage.getItem("@token-blogIfma!");

      if (storageData) {
        setUser(JSON.parse(storageData));
      }
    }

    getStorageData();
  });

  async function login(email: string, senha: string, lembrar: boolean) {
    try {
      const response = await api.post<User>("login", { email, senha, lembrar });
      AsyncStorage.setItem("@token-blogIfma!", JSON.stringify(response.data));
      setUser(response.data);
    } catch (err) {
      Alert.alert(`${err}`);
      console.log(err);
    }
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("@token-blogIfma!");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
