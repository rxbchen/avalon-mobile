import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardContainer : {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  titleContainer: {
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'stretch'
  },

  titleText: {
    // fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'left'
  },

  titleImage: {
    height: 25,
    width: 25
  },

  collapsibleContainer: {
    backgroundColor: '#f4e7b7',
    padding: 10
  },

  linearGradient: {
    borderRadius: 1,
  }
})