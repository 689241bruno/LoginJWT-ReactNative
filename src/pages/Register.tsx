import {Text, View, StyleSheet} from 'react-native';

const Register = () => {
    return(
        <View style={styles.container}>
            <Text>
                Register
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});


export default Register;