import {Ionicons} from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';

export default function App() {
  return (
   <ScrollView style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <View>
          <Text>Café do código</Text>
          <Text>Seu café, uma linha por vez</Text>
        </View>
        <View>
          <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
        </View>

      </View>
   </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F9F9F9'
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})