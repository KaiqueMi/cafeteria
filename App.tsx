import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>

        <View>
          <Text style={styles.headerTitle}>Café do código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
        </View>
      </View>

    
    <View style={styles.content}>
      <View style={styles.grettingSection}>
        <Text style={styles.grettingTitle}>Bom dia!</Text>
        <Text style={styles.grettingSubtitle}>Que tal um café hoje?</Text>
      </View>

      <View>
        <Image source={require('./assets/coffee.jpg')}></Image>
        <Text>Cappucino Especial</Text>
        <Text>Cremoso e delicioso</Text>
        <Text>R$ 12,90</Text>      
      </View>

    </View>
    

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },

  content: {
    paddingHorizontal: 24
  },

  grettingSection: {
    marginTop: 10,
    marginBottom: 24
  },

  grettingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2f2d2c"
  }, 
  
  grettingSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 8
  },


})