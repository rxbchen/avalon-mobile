import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginBottom: 30
  },
  textView: {
    marginBottom: 10
  },
  winnerText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
    fontWeight: "bold",
  },
  text:{
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  circleImage: {
    height: 150,
    borderRadius: 75,
    width: 150
  },
  returnButton: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
    alignSelf: 'center',
    width: 300,
  },
  buttonView: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  cardCollapsibleContainer: {
    minHeight: 50
  },
  cardTitleContainer: {
    paddingTop: 10,
    paddingBottom: 10
  }
})
