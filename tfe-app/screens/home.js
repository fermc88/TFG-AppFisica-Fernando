import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';

const actividad = require('../static/Abuelos.jpg');
const agua = require('../static/agua.jpg');
const vitamina = require('../static/vitaminas.png');


const Home = ({navigation}) => {
    return (
        <View style={styles.screen} >
            <Text style={styles.Title}>Crea tu nueva actividad</Text>
            <View
                style={styles.option}
            >
                <ImageBackground source={actividad} resizeMode="cover" style={styles.img}>
                    <Text onPress={() => navigation.navigate('Ejercicio')} style={styles.text}>Actividades físicas</Text>
                </ImageBackground>
            </View>
            <View
                style={styles.option}
            >
                <ImageBackground source={agua} resizeMode="cover" style={styles.img}>
                    <Text onPress={() => navigation.navigate('AguaIngesta')} style={styles.text}>Control de toma de agua</Text>
                </ImageBackground>
            </View>
            <View
                style={styles.option}

            >
                <ImageBackground source={vitamina} resizeMode="cover" style={styles.img}>
                    <Text style={styles.text} onPress={() => navigation.navigate('MedicamentoIngesta')}>Medicamentos y vitaminas</Text>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: '#117864',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
        fontSize: 26,
        fontWeight: 600
    },
    option: {
        flex: 1,
        width: 270,
        height: 130,
        marginBottom: 10,
        borderRadius: 8
    },
    img: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        width: '90%',
        margin: 'auto',
        color: 'white',
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        borderRadius: 8,
    },
});


export default Home