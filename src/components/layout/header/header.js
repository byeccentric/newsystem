import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from './appbar/';

export default class Header extends Component {
    render() {
        return (
            <AppBar {...this.props} />
        )
    }
}

Header.proptypes = {
    title: PropTypes.string.isRequired
}
