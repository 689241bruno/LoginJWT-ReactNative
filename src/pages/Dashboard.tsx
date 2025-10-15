import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useAuth } from '../hooks/useAuth';


const Dashboard = () => {
    const {logout, user} = useAuth();
    return(
        <View style={styles.container}>
            <Text>{`Olá ${user?.nome}, seja bem vindo!`}</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});


export default Dashboard;