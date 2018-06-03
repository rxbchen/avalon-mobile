import React from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import styles from './BackgroundStyle'
import proptypes from 'prop-types';
import { Text } from 'react-native'
import { Header, Body, Right, Button, Title } from 'native-base'


export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: false
    }
  }

  displayContent() {
    this.setState({showContent: true})
  }

  render() {
    const backgroundPath = '../../static/images/background.jpg';
    return (
      <ImageBackground source={require(backgroundPath)}
                       style={styles.backgroundImage}
                       onLoad={() => this.displayContent()}>
        {this.props.header === false ? null :
          <Header style={styles.headerStyle}>
            <Body>
              <Title style={styles.headerFont}>{this.props.title}</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigate({routeName: 'HomeScreen'})}>
                <Text>Home</Text>
              </Button>
            </Right>
          </Header>
        }
        <ScrollView style={styles.scrollView} scrollEnabled={this.props.isScrollEnabled}>
          {this.state.showContent ? this.props.children : null}
        </ScrollView>
      </ImageBackground>
    )
  }
}

BackgroundImage.propTypes = {
  isScrollEnabled: proptypes.bool,
  title: proptypes.string,
}