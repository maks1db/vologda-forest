import React, { Component } from 'react';
import IndexScreen from 'Screens/IndexScreen.jsx';
import AboutScreen from 'Screens/AboutScreen.jsx';
import ContactsScreen from 'Screens/ContactsScreen.jsx';
import ItemsScreen from 'Screens/ItemsScreen.jsx';

export default class Main extends Component {

    render() {
        return (
            <div>
                <IndexScreen />
                <AboutScreen />
                <ItemsScreen />
                <ContactsScreen />
            </div>
        );
    }
}