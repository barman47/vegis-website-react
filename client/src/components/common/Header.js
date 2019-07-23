import React, { Component } from 'react';
import Navigation  from '../Navigation';
import OfflineMessage from './OfflineMessage';

class Header extends Component {
    render () {
        return (
            <header>
                <Navigation />
                <OfflineMessage />
            </header>
        )
    }
}

export default Header;