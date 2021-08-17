import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://image.flaticon.com/icons/png/512/1361/1361728.png'}}
       style={{width: 200, height: 200}} />
      <Text style={letra.nombre}>Christian Giovanni Tobar Cerón</Text>
      <Text style={letra.titulos}>Carrera: Ingeniería en ciencias de la computación</Text>
      <Text style={letra.titulos}>Hobbies: Jugar videojuegos, practicar tenis de mesa, escuchar musica(casi todo el tiempo) y ver peliculas :D</Text>
      <Text style={letra.titulos}>Lenguajes de programación favoritos: JAVA y C#</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const letra = StyleSheet.create({
  nombre: {
    fontSize: 40,
    color: '#978897',
    fontWeight: 'Bold'
  },
  titulos: {
    marginTop: 5,
    fontSize: 25,
    color: '#494850',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8D8F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
