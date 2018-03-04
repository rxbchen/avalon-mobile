import React, { StyleSheet } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({

    title: {
      textAlign: "center",
      fontFamily: "Roboto-Light",
      color: '#FFF',
      fontSize: 60,
      fontWeight: '100',
    },
    main_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d6d7da',
    },
    linearGradient: {
      height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      marginBottom: 20
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 7,
      color: '#ffffff',
      backgroundColor: 'transparent',
    }
  });