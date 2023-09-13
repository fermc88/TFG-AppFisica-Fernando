import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'
import axios from 'axios';
import ControlAgua from '../components/control-agua';

const AguaIngesta = () => {

  const route = useRoute()
  const navigation = useNavigation()

  const [data, setData] = useState()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Ingesta de agua",
      headerLeft: () => (
        <HeaderBackButton
          name='back'
          size={24}
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      )
    })
    fetchDataAgua()
  }, [])

  const fetchDataAgua = async () => {

    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/ingesta-agua/pendientes/', config);
    const data = await response.data
    setData(data);
  }

  const incrementarIngesta = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/plan-ingesta/incrementar/`);
      fetchDataAgua()
    } catch (error) {
      console.error(error);
    }
  }

  const restarIngesta = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/plan-ingesta/restar/`);
      fetchDataAgua()
    } catch (error) {
      console.error(error);
    }
  }

  const terminarDia = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/plan-ingesta/finalizar/`);
      fetchDataAgua()
    } catch (error) {
      console.error(error);
    }
  }

  const nuevoPlan = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/plan-ingesta/reiniciar/`);
      fetchDataAgua()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.screenAgua} >
      <ControlAgua data={data} nuevoPlan={nuevoPlan} incrementarIngesta={incrementarIngesta} restarIngesta={restarIngesta} terminarDia={terminarDia} />
    </View>
  )
}

const styles = StyleSheet.create({
  screenAgua: {
    padding: 20
  },
});

export default AguaIngesta