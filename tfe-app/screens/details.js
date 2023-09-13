import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.screenDetails} >
        <Text>Details Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
    screenDetails: {
      padding: 20
    },
  });
  

export default DetailsScreen