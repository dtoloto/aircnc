import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, AsyncStorage, StyleSheet, Alert } from 'react-native';

import socketio from 'socket.io-client';

import SpotList from '../components/spotList';

import logo from '../assets/logo.png';

export default function List (){

    const [techs, setTechs] = useState([]);

    useEffect(()=>{
        AsyncStorage.getItem('user_id').then(user_id=>{
            const socket = socketio('http://localhost:5000',{
                query: { user_id }
            })

            socket.on('booking_response', booking=>{
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        });

    }, [])
    
    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storagedTechs=>{
            const techsArray = storagedTechs.split(',').map(tech=>tech.trim());
            setTechs(techsArray);
        })
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>

            <ScrollView>
                {techs.map(tech=> <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
           
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    logo:{
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})