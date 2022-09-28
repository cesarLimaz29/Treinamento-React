import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, ScrollView, Modal, Switch, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { openDatabase } from "react-native-sqlite-storage";




export default function cliente({ navigation }) {
    
    // modal
    const [modalVisible, setModalVisible] = useState(false);

    // labels
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [emailtxt, setEmailtxt] = useState('')
    const [cell, setCell] = useState('');
    
    //whatsapp?
    const [IsSim, setSim] = React.useState('sim');
    
    // dias entrega
    const [isSegunda, setSegunda] = useState(false);
    const [isTerca, setTerca] = useState(false);
    const [isQuarta, setQuarta] = useState(false);
    const [isQuinta, setQuinta] = useState(false);
    const [isSexta, setSexta] = useState(false);

    // tempo
    const [time, setTime] = useState('');

    // preferencia
    const [isEmail, setEmail] = useState(false);
    const [isWhatsApp, setWhatsapp] = useState(false);
    const [isFax, setFax] = useState(false);
    const [isTelefonema, setTelefonema] = useState(false);


    //estabelecimento
    const [checked, setChecked] = React.useState('first');
    

    //switch rastreamento
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled, setIsEnabled] = useState(false);


    // <------------------------------------------------------------------------>




    return (
        <SafeAreaView  >
            <LinearGradient colors={['#890FFF', '#A13FFF', '#9001C8',]} style={styles.linearGradient} >

                <Text style={styles.txtTitulo}>
                    Clientes
                </Text>
                <TextInput placeholder="Digite o id do cliente" placeholderTextColor="#000" style={styles.input} />
                <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("Home")}>
                    <Image source={require('./../assets/img/back.png')} style={styles.img} ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4} onPress={() => setModalVisible(true)}>
                    <Image source={require('./../assets/img/addUser.png')} style={styles.img} ></Image>
                </TouchableOpacity>
            </LinearGradient>

            <ScrollView style={styles.contai}>

                <View style={styles.dados}>
                    <TouchableOpacity>
                        <Text style={styles.txtDados}> ID:012230</Text>
                        <Text style={styles.txtDados}> Nome: Cesar de Sousa Lima</Text>
                        <Text style={styles.txtDados}> Telefone: 11 94353-7719</Text>
                        <Text style={styles.txtDados}> Email: Cesarlima@outlook.com</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <ScrollView style={styles.modalView}>
                    <Text style={styles.modalText}>Cadastro de clientes</Text>
                    <TextInput placeholder="Nome" placeholderTextColor="#000" style={styles.input}  value={nome} onChangeText={setNome}/>

                    <TextInput placeholder="Sobrenome" placeholderTextColor="#000" style={styles.input} value={sobrenome} onChangeText={setSobrenome} />
                    
                    <TextInput placeholder="E-mail" placeholderTextColor="#000" style={styles.input} value={emailtxt} onChangeText={setEmailtxt}/>
                    
                    <TextInputMask style={styles.input} type={'cel-phone'} placeholder="Telefone" placeholderTextColor="#000" options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99)'
                    }}
                        value={cell}
                        onChangeText={text => setCell(text)}
                    />

                    <Text style={styles.entrega}> O numero é Whatsapp:</Text>

                    <View style={styles.checkboxContainer}>
                        
                    <RadioButton
                            value="sim"
                            status={IsSim === 'sim' ? 'checked' : 'unchecked'}
                            onPress={() => setSim('sim')}
                        />
                        <Text style={styles.txtcheck}>Sim</Text>
                        <RadioButton
                            value="nao"
                            status={IsSim === 'nao' ? 'checked' : 'unchecked'}
                            onPress={() => setSim('nao')}
                        />
                        <Text style={styles.txtcheck}>Não</Text>
                        
                    </View>

                    

                    <Text style={styles.entrega}> Dias para entrega:</Text>

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isSegunda} onValueChange={setSegunda} />
                        <Text style={styles.txtcheck}>Segunda - Feira</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isTerca} onValueChange={setTerca} />
                        <Text style={styles.txtcheck}>Terça - Feira</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isQuarta} onValueChange={setQuarta} />
                        <Text style={styles.txtcheck}>Quarta - Feira</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isQuinta} onValueChange={setQuinta} />
                        <Text style={styles.txtcheck}>Quinta - Feira</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isSexta} onValueChange={setSexta} />
                        <Text style={styles.txtcheck}>Sexta - Feira</Text>
                    </View>

                    <TextInputMask style={styles.input} type={'datetime'} placeholder="Horário de entrega" placeholderTextColor="#000" options={{
                        format: 'hh:mm'
                    }}
                        value={time}
                        onChangeText={text => setTime(text)}
                    />
                    <Text style={styles.entrega}> Preferência de contato:</Text>

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isEmail} onValueChange={setEmail} />
                        <Text style={styles.txtcheck}>E-mail</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isFax} onValueChange={setFax} />
                        <Text style={styles.txtcheck}>Fax</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isWhatsApp} onValueChange={setWhatsapp} />
                        <Text style={styles.txtcheck}>Whatsapp</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isTelefonema} onValueChange={setTelefonema} />
                        <Text style={styles.txtcheck}>Telefonema</Text>
                    </View>

                    <Text style={styles.entrega}> Tipo de estabelecimento:</Text>

                    <View style={styles.checkboxContainer}>

                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={styles.txtcheck}>Residencia</Text>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={styles.txtcheck}>Comercial</Text>
                    </View>

                    <Text style={styles.entrega}> Entrega  rastreável:</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#9001C8" }}
                        thumbColor={isEnabled ? "#890FFF" : "#FFF"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.swt}
                    />

                    <TouchableOpacity style={styles.button6} onPress={() => { setModalVisible(!modalVisible); }} >
                        <Text style={styles.txtButton}> Cadastrar </Text>
                    </TouchableOpacity>

                </ScrollView>

            </Modal>

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        height: 570,
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
    },
    txtTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 25,
    },
    txtCont: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 20,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#9001C8',
        width: 180,
        height: 60,
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
    button2: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 50,
        backgroundColor: '#FFF',
        width: 180,
        height: 60,
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
    txtButton: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 18
    },
    logo: {
        marginTop: 10,
        width: 370,
        height: 370
    },
    button3: {
        marginLeft: -10,
        alignItems: 'center',
        textAlign: 'center',
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    img: {
        marginTop: -103,
        marginLeft: -320,
        width: 30,
        height: 30
    },
    button4: {
        marginTop: -30,
        marginLeft: 650,
        alignItems: 'center',
        textAlign: 'center',
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    contai: {
        marginTop: -400,
        backgroundColor: '#FBFAFA',
        width: '90%',
        height: 550,
        borderRadius: 10,
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8,
    },
    input: {
        paddingLeft: 25,
        backgroundColor: '#fff',
        width: 270,
        height: 50,
        marginLeft: 2,
        marginTop: 20,
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
    dados: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 5,
        width: 310,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8,
    },
    txtDados: {
        marginTop: 3,
        paddingTop: 1,
        paddingLeft: 10
    },
    modalView: {
        marginTop: 85,
        margin: 20,
        backgroundColor: "white",
        height: 650,
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        color: '#000',
        marginBottom: 15,
        textAlign: "center",
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    entrega: {
        marginTop: 30,
        marginLeft: 0,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 17,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 2,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
        elevation: 8
    },
    txtcheck: {
        margin: 5,

    },
    swt: {
        marginTop: -24,
        marginRight: 40
    },
    combo: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdownStyle: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdownTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },

    button6: {
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 50,
        marginTop: 30,
        marginBottom: 90,
        backgroundColor: '#9001C8',
        width: 180,
        height: 50,
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


});

