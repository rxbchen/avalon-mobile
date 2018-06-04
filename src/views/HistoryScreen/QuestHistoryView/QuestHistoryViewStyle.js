import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    margin: 2,
    padding: 5
  },
  cardContainer: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
  },
  cardTitleContainer: {
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'stretch'
  },
  cardTitleText: {
    // fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'left'
  },
  title: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 40,
    marginBottom: 10
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
  adventureInfoText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 15
  },
  otherInfoText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 10
  }
})