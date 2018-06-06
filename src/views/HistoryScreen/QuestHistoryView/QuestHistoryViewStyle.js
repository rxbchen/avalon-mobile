import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  proposalCardContainer: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1.0,
    elevation: 6,
    shadowRadius: 15,
    borderRadius: 1,
    margin: 10
  },

  proposalCardTitleText: {
    // fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 40,
    marginBottom: 20
  },
  backButton: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 40
  },
  playersText: {
    fontWeight: 'normal',
    fontSize: 14
  },
  contentText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})