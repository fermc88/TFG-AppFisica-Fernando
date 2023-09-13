import {
    createDrawerNavigator
  } from '@react-navigation/drawer';
import { HomeStack, EjercicioStack, AguaStack, VitaminasStack} from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title: 'Inicio'
      }}/>
      <Drawer.Screen name="EjercicioStack" component={EjercicioStack} options={{
        title: 'Actividad física'
      }}/>
      <Drawer.Screen name="AguaStack" component={AguaStack} options={{
        title: 'Control de toma de agua'
      }}/>
      <Drawer.Screen name="VitaminasStack" component={VitaminasStack} options={{
        title: 'Vitaminas y medicamentos'
      }}/>
      {/* Agrega más Drawer.Screen para otras secciones de tu aplicación */}
    </Drawer.Navigator>
  );
}

