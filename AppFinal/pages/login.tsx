import React from "react";
import { Text, View,Image,TouchableOpacity,StyleSheet,TextInput,SafeAreaView } from "react-native";

export default function login({ navigation }){
   return(
    <SafeAreaView>

        <View style = {styles.container}>
            <View style = {styles.container2}>
            <Image source={require('./../assets/img/logo.png')} style = {styles.logo}></Image>
            <View style = {styles.conteudo}>
                <Text style = {styles.titulo}> Faça o login </Text>
                <TextInput placeholder="Digite o usuario" placeholderTextColor = "#FFF" style={styles.input}/>
                <TextInput placeholder="Digite a senha" secureTextEntry={true} placeholderTextColor = "#FFF" style={styles.input2}/>
            
                <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Home")}>
                    <Text style = {styles.txtButton}> Entrar </Text>
                </TouchableOpacity>        
                        <Text style = {styles.txtMsg}>Ainda não possui cadastro?</Text>
                <TouchableOpacity>
                    <Text style = {styles.txtClick}>  Clique aqui!</Text>
                </TouchableOpacity>
            </View>    
                <View style= {styles.decoration}>
                </View>
            </View>
            
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#ffff',
        width:'100%',
        height:'100%',
    },
    container2:{
        backgroundColor: '#9001C8',
        width:'100%',
        height:150,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        alignItems:'center',
        position:"absolute",
    },
    logo:{
        marginTop:20,
        height:80,
        width:250,
    },
    conteudo:{
        alignItems: 'center',
        marginTop:70,
    },
    titulo:{
        color: '#9001C8',
        fontSize: 40,
        fontWeight: 'bold',

    },
    input:{
        marginTop:50,
        backgroundColor: '#9001C8',
        borderRadius:30,
        color:'#FFF',
        fontWeight: 'bold',
        paddingLeft:20,
        width:280,
        shadowColor: "#000",
        shadowOffset: {
	    width: 2,
	    height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8,
    },
    input2:{
        marginTop:50,
        backgroundColor: '#9001C8',
        borderRadius:30,
        color:'#FFF',
        fontWeight: 'bold',
        paddingLeft:20,
        width:280,
        shadowColor: "#000",
        shadowOffset: {
	    width: 2,
	    height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8,
    },
    button:{
        alignItems:'center',
        textAlign:'center',
        marginTop:30,
        backgroundColor: '#9001C8',
        width:120,
        height:45,
        color: '#FFF',
        borderRadius: 50,

    },
    txtButton:{
        color:'#FFF',
        fontWeight: 'bold',
        marginTop:8,
        fontSize:20
    },
    txtMsg:{
        marginTop:14,
        color: '#9201b9'
    },
    txtClick:{
        fontSize:16,
        fontWeight:'bold',
        color:'#9001C8'
    },
    decoration:{
        marginTop:220,
        backgroundColor:'#9001C8',
        width:'100%',
        height:20,
        
        
    },
 

});

