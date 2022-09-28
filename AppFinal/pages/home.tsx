import React from "react";
import { Text, View,Image,TouchableOpacity,StyleSheet,TextInput,SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";


export default function home ({navigation}) {
    return(
    <SafeAreaView style={styles.container}>
        <View>
            <LinearGradient colors={['#890FFF','#A13FFF', '#9001C8', ]} style={styles.linearGradient} >
                <Text style = {styles.titulo}>
                    Bem vindo!
                    
                </Text>
                <Image source={require('./../assets/img/bd.png')} style = {styles.logo}></Image>
                <Text style= {styles.txtCont}>Clique em um dos botões para ter acesso a os clientes ou para o sync:</Text>

                <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Cliente")}>
                    <Text style = {styles.txtButton}> Cliente </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.button2} onPress={() => navigation.navigate("Sync")}>
                    <Text style = {styles.txtButton}> Sync </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.button3} onPress={() => navigation.navigate("Login")}>
                 <Image source={require('./../assets/img/porta.png')} style = {styles.img} ></Image>
                </TouchableOpacity>                     
            </LinearGradient>  
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
    },
    linearGradient:{
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        height: '75%',
        
    },
    titulo:{
        fontSize:35,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop:50
    },
    logo:{
        marginTop:30,
        width:270,
        height: 270
    },
    txtCont:{
        fontSize:20,
        padding:15,
        color:'#9001C8',
        fontWeight:'bold',
        textAlign:'justify',
        marginTop:40

    },
    button:{
        marginLeft: -170,
        alignItems:'center',
        textAlign:'center',
        marginTop:50,
        backgroundColor: '#9001C8',
        width:150,
        height:45,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	    width: 2,
	    height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8,

    },
    txtButton:{
        color:'#FFF',
        fontWeight: 'bold',
        marginTop:10,
        fontSize:20
    },
    button2:{
        marginTop: -45,
        marginLeft: 190,
        alignItems:'center',
        textAlign:'center',
        backgroundColor: '#9001C8',
        width:150,
        height:45,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	    width: 2,
	    height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8,

    },
    button3:{
        marginTop: -590,
        marginLeft: 300,
        alignItems:'center',
        textAlign:'center',
        width:30,
        height:30,
        borderRadius:5,
 

    },
    img:{
        
        marginLeft:30,
        width:30,
        height:30
    }

});
