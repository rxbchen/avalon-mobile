import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import proptypes from 'prop-types';

export default class CustomDropdown extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Dropdown

                label = {this.props.label ? this.props.label : ''}
                data = {this.props.options}
                value = {this.props.options[0]['value']}
                dropdownPosition = {0}
                onChangeText={this.props.onChange}

            />
        );
    }

}
CustomDropdown.propTypes = {
    options: proptypes.array.isRequired,
    onChange: proptypes.func,
    icon: proptypes.element,
    label: proptypes.string

}