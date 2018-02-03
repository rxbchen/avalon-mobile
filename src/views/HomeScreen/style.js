import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({

    title: {
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
     },
     maincontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
     verticle_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    horizontal_container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderColor: '#d6d7da',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        padding: 10,
        width: 200,
        marginTop: 10 
    }
});