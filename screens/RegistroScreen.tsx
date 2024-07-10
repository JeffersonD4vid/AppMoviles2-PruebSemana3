import { ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RegistroScreen({navigation} : any) {
    return (
      <ImageBackground 
      source={{uri:"https://img.freepik.com/free-vector/purple-fluid-background_53876-99561.jpg?t=st=1720653154~exp=1720656754~hmac=acd8d0ef2d20278350949238d276e15d73145fc4a1d2d4daa8a07576e0ef2668&w=360"}}
      style={styles.container}
      >

        <Text style={{ color:'#40DFEA', fontSize:60, fontWeight:'bold', marginBottom:30}}>Registro</Text>
    
        <TextInput
          placeholder='Usuario o Email'
          placeholderTextColor={'#fff'}
          style={styles.input}
        />

        <TextInput
          placeholder='Contraseña'
          placeholderTextColor={'white'}
          style={styles.input}
          />

        <TextInput
          placeholder='Contraseña'
          placeholderTextColor={'white'}
          secureTextEntry={true}
          style={styles.input}
        />

        <TextInput
          placeholder='Contraseña'
          placeholderTextColor={'white'}
          secureTextEntry={true}
          style={styles.input}
          />

        <TouchableOpacity style={styles.button}                  >
          <Text style={styles.buttonText} >Registrarme</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', marginTop:35}}>
          <Text style={{color:'#fff', fontSize:16}}>Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{color:'#3316C2', fontSize:16}}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      <StatusBar/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
   
  
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  
  input:{

    height:50,
    width:'80%',
    marginBottom:10,    
    marginTop:10,
    borderRadius:40,
    paddingHorizontal:15,
    color:'white',
    fontSize:15,
    backgroundColor:'#0009'
    
  },
  
  button:{
    backgroundColor:'#4978E3',
    borderRadius:20,
    padding:13,
    width:'50%',
    marginTop:20
  },

  buttonText:{
    color:'#fff',
    fontSize:22,
    textAlign:'center',

  }
})