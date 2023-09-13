import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'
import axios from 'axios';

import ListaEjercicios from '../components/lista-ejercicios';

const Ejercicio = ({ navigation }) => {

  const [data, setData] = useState()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // realiza una llamada a la API para obtener las actividades actualizadas
      fetchDataEjercicios()
    });

    return unsubscribe;
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Actividad física",
      headerLeft: () => (
        <HeaderBackButton
          name='back'
          size={24}
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      )
    })
    fetchDataEjercicios()
  }, [])

  const fetchDataEjercicios = async () => {
    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/actividades/', config);
    const data = await response.data
    setData(data);
  }

  const eliminarActividad = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/actividades/${id}/eliminar/`);
      fetchDataEjercicios()
    } catch (error) {
      console.error(error);
    }
  };

  const terminarActividad = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/actividades/${id}/finalizar/`);
      fetchDataEjercicios()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screen} >
      <ListaEjercicios data={data} eliminarActividad={eliminarActividad} terminarActividad={terminarActividad}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20
  },
});


export default Ejercicio