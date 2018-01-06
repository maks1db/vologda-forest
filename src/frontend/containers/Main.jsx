import React, { Component } from 'react';
import IndexScreen from 'Screens/IndexScreen.jsx';
import AboutScreen from 'Screens/AboutScreen.jsx';
import ContactsScreen from 'Screens/ContactsScreen.jsx';
import ItemsScreen from 'Screens/ItemsScreen.jsx';
import AdvantageScreen from 'Screens/AdvantageScreen.jsx';
import RequestScreen from 'Screens/RequestScreen.jsx';

export default class Main extends Component {

    render() {
        return (
            <div>
                <IndexScreen />
                <AboutScreen />
                <AdvantageScreen />
                <ItemsScreen />
                <RequestScreen />
                <ContactsScreen />
            </div>
        );
    }
}