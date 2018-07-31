import React from 'react';
import { BottomNavigation, BottomNavigationAction, Icon } from '@material-ui/core';
import { Restore, Favorite, LocationOn } from '@material-ui/icons';

export default class LabelBottomNavigation extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange}>
                <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
            </BottomNavigation>
        );
    }
}