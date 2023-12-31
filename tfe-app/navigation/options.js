import { Ionicons } from "@expo/vector-icons"
import { Text } from 'react-native';

export const navOptions = (nav) => {
  return {
    headerTintColor: '#cbd5e1',
    headerStyle:{
        backgroundColor: "#0e172a"
    },
    headerRight: () => (
      <Ionicons 
        name="menu"
        size={32}
        color="white"
        onPress={()=>nav.toggleDrawer()}
      />
    ),
  }
}

