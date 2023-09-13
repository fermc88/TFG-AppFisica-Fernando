import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ejercicio from '../screens/ejercicio';
import AguaIngesta from '../screens/agua-ingesta';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import Home from '../screens/home';
import MedicamentoIngesta from '../screens/medicamento';
import EditarActividad from '../screens/actividad/edit-actividad';
import CrearActividad from '../screens/actividad/crear-actividad';
import EditarVitamina from '../screens/vitaminas/edit-vitamina';
import CrearVitamina from '../screens/vitaminas/crear-vitamina';


const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={()=>(navOptions(navigation))}>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Ejercicio" component={Ejercicio}/>
            <Stack.Screen name="EditarActividad" component={EditarActividad} />
            <Stack.Screen name="CrearActividad" component={CrearActividad} />

            <Stack.Screen name="AguaIngesta" component={AguaIngesta} />

            <Stack.Screen name="MedicamentoIngesta" component={MedicamentoIngesta} />
            <Stack.Screen name="EditarVitamina" component={EditarVitamina} />
            <Stack.Screen name="CrearVitamina" component={CrearVitamina} />
        </Stack.Navigator>
    );
}

export const EjercicioStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={() => (navOptions(navigation))}>
            <Stack.Screen name="Ejercicio" component={Ejercicio}/>
            <Stack.Screen name="EditarActividad" component={EditarActividad} />
            <Stack.Screen name="CrearActividad" component={CrearActividad} />
        </Stack.Navigator>
    );
}

export const AguaStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={()=>(navOptions(navigation))}>
            <Stack.Screen name="AguaIngesta" component={AguaIngesta} />
        </Stack.Navigator>
    );
}

export const VitaminasStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={()=>(navOptions(navigation))}>
            <Stack.Screen name="MedicamentoIngesta" component={MedicamentoIngesta} />
            <Stack.Screen name="EditarVitamina" component={EditarVitamina} />
            <Stack.Screen name="CrearVitamina" component={CrearVitamina} />
        </Stack.Navigator>
    );
}