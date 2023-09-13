import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'
import ListaMedicamentos from '../components/lista-medicamentos';
import axios from 'axios';

const MedicamentoIngesta = () => {

  const route = useRoute()
  const navigation = useNavigation()
  const [data, setData] = useState()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // realiza una llamada a la API para obtener las actividades actualizadas
      fetchDataMedicamentosVinaminas()
    });

    return unsubscribe;
  }, [navigation]);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: "Medicamentos y vitaminas",
      headerLeft: ()=>(
        <HeaderBackButton
          name='back'
          size={24}
          tintColor="white"
          onPress={()=> navigation.goBack()}
        /> 
      )
    })
    fetchDataMedicamentosVinaminas()
  }, [])

  const fetchDataMedicamentosVinaminas = async () => {
    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };
    const response = await axios.get('http://127.0.0.1:8000/api/medicamentosvitaminas/', config);
    const data = await response.data
    setData(data);
  }

  const eliminarVitamina = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/medicamentosvitaminas/${id}/eliminar/`);
      fetchDataMedicamentosVinaminas()
    } catch (error) {
      console.error(error);
    }
  };

  const terminarActividad = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/medicamentosvitaminas/${id}/terminar/`);
      fetchDataMedicamentosVinaminas()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screenMedicamento} >    
      <ListaMedicamentos data={data} eliminarVitamina={eliminarVitamina} terminarActividad={terminarActividad }  />
    </View>
  )
}

const styles = StyleSheet.create({
  screenMedicamento: {
    padding: 20
  },
});

export default MedicamentoIngesta