import React, { Component } from 'react';
import TopMenu from './topMenu'
import InformationMenu from './inforMenu'
import MainMenu from './mainMenu'

class Header extends Component {
    render() {
        return (
            <div>
                {/* top menu */}
                <TopMenu/>
                {/* inforation menu */}
                <InformationMenu/>
                {/* main menu */}
                <MainMenu/>
            </div>
        );
    }
}

export default Header;