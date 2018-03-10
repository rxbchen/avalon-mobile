import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardContainter : {
    padding: 10,
    margin: 10
  },
  titleContainer: {
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 10,
  },

  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'left'
  },

  titleImage: {
    height: 25,
    width: 25
  },

  collapsibleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f4e7b7',
    padding: 10
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})