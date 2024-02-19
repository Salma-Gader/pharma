import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/eb78ea508a985f4187efa77b5feebee3.jpg')} // Adjust the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome To PharmGarde </Text>
        <Image
          source={require('../assets/Pharmacy-logo-on-transparent-PNG.png')}
          style={styles.menuIcon}
        />
        <View style={styles.buttonContainer}>
          <CustomButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
          <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    // color:'white',
  },
  menuIcon: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#177FB2',
    width: '100%',
    padding: 5,
    borderRadius: 8,
  },
  buttonContainer: {
    gap: 8,
    justifyContent: 'space-around',
    width: '80%',
    // Ajoutez une couleur de fond pour les boutons
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center', // Assurez-vous que la couleur du texte est visible sur le fond
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
