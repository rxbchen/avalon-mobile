import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({

    title: {
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
     },
     main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#d6d7da',
    },
    button: {
        alignItems: 'center',
        // backgroundColor: 'red',
        background: linear-gradient(red, yellow),
        padding: 10,
        width: 200,
        marginTop: 10 
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    play_button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        width: 200,
        marginTop: 10 
    }
});