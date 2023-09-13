import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Picker, Button } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'
import axios from 'axios';

const EditarVitamina = ({ route }) => {

  const { data } = route.params;

  const id = data.id

  const navigation = useNavigation()

  const [nombre, setNombre] = useState(data.nombre);
  const [tipo, setTipo] = useState(data.tipo);
  const [hora_ingesta, setHora_ingesta] = useState(data.hora_ingesta);
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
    console.log('Tipo:', tipo);
    console.log('horaIngesta:', hora_ingesta);
    console.log('realizado:', realizado);
    const data = {
      nombre,
      tipo,
      hora_ingesta,
      realizado
    };
    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };
    await axios.put(`http://127.0.0.1:8000/api/medicamentosvitaminas/${id}/actualizar/`, data, config)
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
      <Text style={styles.title} >Actualizar actividad</Text>
      <View style={styles.containerForm}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          required
          placeholder="Ingrese el nombre del medicamento o vitamina"
        />

        <Text style={styles.label}>Hora de consumo:</Text>
        <TextInput
          style={styles.input}
          value={hora_ingesta}
          onChangeText={setHora_ingesta}
          required
          placeholder="Hora de consumo formato de 24 horas"
        />

        <Text style={styles.label}>Tipo:</Text>
        <Picker
          style={styles.input}
          selectedValue={tipo}
          onValueChange={setTipo}
          required
        >
          <Picker.Item label="Selecciona tipo" value="selecciona" />
          <Picker.Item label="Medicamento" value="medicamento" />
          <Picker.Item label="Vitamina" value="vitamina" />
        </Picker>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={realizado}
            onValueChange={setRealizado}
          />
          <Text style={styles.checkboxLabel}>Realizado</Text>
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
export default EditarVitamina