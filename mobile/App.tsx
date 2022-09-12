import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  function Button(props: ButtonProps){
    return (
      <TouchableOpacity>
        <text>{props.title}</text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    

      
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
