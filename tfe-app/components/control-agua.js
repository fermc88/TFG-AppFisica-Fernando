import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ControlAgua = ({ data, incrementarIngesta, restarIngesta, terminarDia, nuevoPlan }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Control de toma de agua al día</Text>
            <Text style={styles.texto}>Podrás controlar el número de vasos de agua al dia que consumas, a través de una meta diaria que establezcas. ¡La hidratación es importante y vital para una buena salud!</Text>
            {data && data !== null && !data.realizado
                ?
                <View style={styles.controlContainer}>
                    <Text style={styles.tituloContador}>Vasos consumidos</Text>
                    <Text style={styles.textoContador}> {data.vasos_tomados} de {data.meta_intake_vasos} </Text>

                    <View
                        style={styles.agregarButton}
                    >
                        <Text style={styles.buttonText} onPress={() => incrementarIngesta()}>SUMAR 1 VASO</Text>
                    </View>
                    <View
                        style={styles.restarButton}
                    >
                        <Text style={styles.buttonText} onPress={() => restarIngesta()}>RESTAR 1 VASO</Text>
                    </View>
                    <View
                        style={styles.cerrarButton}
                    >
                        <Text style={styles.buttonText} onPress={() => terminarDia()}>FINALIZAR DIA</Text>
                    </View>
                </View>

                :
                <>
                    <View
                        style={styles.agregarButton}
                    >
                        <Text style={styles.buttonText} onPress={() => nuevoPlan()}>NUEVO CONTEO</Text>
                    </View>
                </>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        border: '3px dotted #A3E4D7',
        borderRadius: 7,
        flex: 1,
    },
    titulo: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 600
    },
    texto: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 26
    },
    tituloContador: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 600,
        textAlign: 'center'
    },
    textoContador: {
        paddingVertical: 15,
        marginBottom: 20,
        marginHorizontal: 'auto',
        fontSize: 40,
        lineHeight: 26,
        textAlign: 'center',
    },
    agregarButton: {
        backgroundColor: "#48C9B0",
        borderRadius: 7,
        marginBottom: 15
    },
    restarButton: {
        backgroundColor: "#E74C3C",
        borderRadius: 7,
        marginBottom: 15
    },
    cerrarButton: {
        backgroundColor: "#F1C40F",
        borderRadius: 7,
        marginBottom: 15
    },
    buttonText: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 16,
        color: '#fff'
    },
});

export default ControlAgua