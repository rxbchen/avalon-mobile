import React, { StyleSheet } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({

    title: {
      textAlign: "center",
      fontFamily: "Roboto-Light",
      color: '#FFF',
      fontSize: 60,
      fontWeight: '100',
      lineHeight: 55
    },
    mainContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
    },
    linearGradient: {
      height: 40,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      marginBottom: 20
    },
    smallButtonContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 230,
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 7,
      color: '#ffffff',
      backgroundColor: 'transparent',
    }
  });