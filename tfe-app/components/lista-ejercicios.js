
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListaEjercicios = ({ data, eliminarActividad, terminarActividad }) => {

    const navigation = useNavigation();

    console.log(data)

    const renderItem = ({ item }) => {

        const listItemStyles = [
            styles.listItem,
            item.realizado ? { backgroundColor: '#28B463' } : null
        ];

        return (
            <View style={listItemStyles}>
                <View><Text style={{ fontSize: 16, fontWeight: 700, padding: 5 }}>{item.nombre} | {item.duracion} minutos</Text></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        item.realizado ? <Entypo name="circle-with-cross" size={28} color="red" style={{ marginRight: 5 }} onPress={() => eliminarActividad(item.id)} /> : <> <Entypo name="edit" size={28} color="orange" style={{ marginRight: 3 }} onPress={() => navigation.navigate('EditarActividad', { data: item })} />
                        <Entypo name="circle-with-cross" size={28} color="red" style={{ marginRight: 5 }} onPress={() => eliminarActividad(item.id)} />
                        <AntDesign name="checkcircle" size={24} color="green" onPress={() => terminarActividad(item.id)} /> </>
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.list}>
            <Text style={styles.titulo}>Control de actividades físicas</Text>
            <Text style={styles.texto}>Podrás crear un plan de actividades físicas, adaptado a tus capacidades. Podras poner el tiempo que te tome hacer cada actividad, así como las series y repeticiones.</Text>
            <Text style={styles.texto}>Además, podrás eliminar o editar la actividad, asi como marcarla como finalizada. </Text>
            <View
                style={styles.agregarButton}
            >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('CrearActividad')}>Agregar actividad</Text>

            </View>
            <FlatList
                data={data}
                keyExtractor={data => data.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('refreshing')}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
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
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingVertical: 15,
        paddingHorizontal: 5,
        border: '2px solid #A3E4D7',
        borderRadius: 7,
        marginBottom: 10,
        color: 'red'
    },
    agregarButton: {
        backgroundColor: "#48C9B0",
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

export default ListaEjercicios