import React, { Component } from 'react';
import AppBar from './appbar/';

export default class Header extends Component {
    render() {
        return (
            <AppBar {...this.props} />
        )
    }
}