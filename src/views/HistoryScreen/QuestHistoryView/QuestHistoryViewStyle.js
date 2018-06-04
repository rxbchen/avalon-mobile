import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    margin: 2,
    padding: 5
  },
  cardContainer: {
    borderWidth: 2.0,
    borderColor: '#000'
  },
  title: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 40,
  },
  backButton: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 40
  },
  questInfoText: {
    fontWeight: 'normal',
    color: '#000',
    fontSize: 20
  },
  boldInfoText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 10
  }
})