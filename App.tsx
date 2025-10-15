import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/index';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (<AuthProvider>
    <Routes></Routes>
  </AuthProvider>);
}

