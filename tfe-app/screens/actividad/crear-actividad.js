import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Picker, Button } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'
import axios from 'axios';

const CrearActividad = () => {

  const route = useRoute()
  const navigation = useNavigation()

  const [nombre, setNombre] = useState('');
  const [duracion, setDuracion] = useState('');
  const [series, setSeries] = useState('');
  const [repeticiones, setRepeticiones] = useState('');
  const [tipo, setTipo] = useState('Cardio');
  const [notificaciones, setNotificaciones] = useState(false);
  const [realizado, setRealizado] = useState(false);

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
  }, [])

  const handleGuardar = async () => {
    // Aquí puedes hacer algo con los datos ingresados, como enviarlos al backend
    console.log('Nombre:', nombre);
    console.log('Duración:', duracion);
    console.log('Series:', series);
    console.log('Repeticiones:', repeticiones);
    console.log('Tipo:', tipo);
    console.log('Notificaciones:', notificaciones);
    console.log('realizado:', realizado);
    const data = {
      nombre,
      duracion,
      series,
      repeticiones,
      tipo,
      notificaciones,
      realizado
    };
    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };
    await axios.post('http://127.0.0.1:8000/api/actividades/crear/', data, config)
      .then(response => {
        // Manejar la respuesta exitosa del backend
        console.log(response.data);
        navigation.goBack();
      })
      .catch(error => {
        // Manejar el error de la solicitud
        console.error(error);
      });

  };

  return (
    <View style={styles.container} >
      <Text style={styles.title} >Crear Actividad</Text>
      <View style={styles.containerForm}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          required
          placeholder="Ingrese el nombre de la actividad"
        />

        <Text style={styles.label}>Duración:</Text>
        <TextInput
          style={styles.input}
          value={duracion}
          onChangeText={setDuracion}
          required
          placeholder="Ingrese la duración en minutos"
        />

        <Text style={styles.label}>Series:</Text>
        <TextInput
          style={styles.input}
          value={series}
          onChangeText={setSeries}
          required
          placeholder="Ingrese el número de series"
        />

        <Text style={styles.label}>Repeticiones:</Text>
        <TextInput
          style={styles.input}
          value={repeticiones}
          onChangeText={setRepeticiones}
          required
          placeholder="Ingrese el número de repeticiones"
        />

        <Text style={styles.label}>Tipo:</Text>
        <Picker
          style={styles.input}
          selectedValue={tipo}
          onValueChange={setTipo}
          required
        >
          <Picker.Item label="Selecciona tipo" value="selecciona" />
          <Picker.Item label="Cardio" value="cardio" />
          <Picker.Item label="Muscular" value="muscular" />
        </Picker>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={notificaciones}
            onValueChange={setNotificaciones}
          />
          <Text style={styles.checkboxLabel}>Notificaciones</Text>
        </View>

        <View
          style={styles.agregarButton}
        >
          <Text style={styles.buttonText} onPress={handleGuardar}>Guardar</Text>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 20,
    padding: 20,
    border: '3px dotted #A3E4D7',
    borderRadius: 7,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 600
  },
  containerForm: {
    padding: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 600
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
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

export default CrearActividad